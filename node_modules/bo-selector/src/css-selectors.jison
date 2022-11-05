/* description: Parses css selectors. */

/* lexical grammar */
%lex

%%
'n'                      return 'n';
[_a-zA-Z][_a-zA-Z0-9-]*  return 'IDENT';
<<EOF>>                  return 'EOF';
\~\=                     return 'CONTAINS_WORD';
\*\=                     return 'CONTAINS';
"|="                     return 'CONTAINS_PREFIX';
"!="                     return 'DOES_NOT_CONTAIN';
"^="                     return 'STARTS_WITH';
"$="                     return 'ENDS_WITH';
\"[^\n\r\f\\"]*\"        return 'SINGLE_QUOTED_STRING';
\'[^\n\r\f\\']*\'        return 'DOUBLE_QUOTED_STRING';
\+\d+                    return 'POSITIVE_INTEGER';
\-\d+                    return 'NEGATIVE_INTEGER';
\d+                      return 'INTEGER';
"(odd)"                  return 'ODD_ARGUMENT';
"(even)"                 return 'EVEN_ARGUMENT';
'#'                      return '#';
","                      return ',';
"."                      return '.';
"["                      return '[';
"]"                      return ']';
"="                      return '=';
":"                      return ':';
"("                      return '(';
")"                      return ')';
">"                      return '>';
"'"                      return "'";
"*"                      return '*';
"~"                      return '~';
"+"                      return '+';
"-"                      return '-';
\s+                      return 'S';


/lex

/* operator associations and precedence */

%start expressions

%% /* language grammar */

expressions
    : selector_list EOF
        { return $1;}
    ;

selector_list
    : selector_list (comma selector)
        { $1.selectors.push($3); $$ = $1 }
    | selector
        { $$ = yy.create({ type: 'selector_list', selectors: [$1] }) }
    ;

comma
    : ','
    | ',' S
    ;

selector
    : combinator_selector
    | simple_selector
    ;

simple_selector
    : element constraint_list
        { $1.constraints = $2.constraints; $$ = $1 }
    | element
    | constraint_list
        { $$ = yy.create(
            { type: 'constraint_list', constraints: $1.constraints }
          )
        }
    ;

combinator_selector
    : selector padded_child_combinator simple_selector
        { $$ = yy.create({ type: 'combinator_selector', left: $1, right: $3, combinator: 'child' }) }
    | selector S simple_selector
        { $$ = yy.create({ type: 'combinator_selector', left: $1, right: $3, combinator: 'descendant' }) }
    | selector padded_tilde simple_selector
        { $$ = yy.create({ type: 'previous_sibling', left: $1, right: $3 }) }
    | selector padded_plus simple_selector
        { $$ = yy.create({ type: 'adjacent_sibling', left: $1, right: $3 }) }
    | '>' S simple_selector
        { $$ = yy.create({ type: 'immediate_child', child: $3, combinator: 'child' }) }
    | '>' simple_selector
        { $$ = yy.create({ type: 'immediate_child', child: $2, combinator: 'child' }) }
    ;

element
    : ident
        { $$ = yy.create({ type: 'element', name: $1, constraints: [] }) }
    | '*'
        { $$ = yy.create({ type: 'element', name: $1, constraints: [] }) }
    ;

constraint_list
    : constraint_list constraint
        { $1.constraints.push($2); $$ = $1 }
    | constraint
        { $$ = yy.create({ type: 'constraint_list', constraints: [$1] }) }
    ;

constraint
    :   class
    |   hash
    |   attrib
    |   pseudo
    ;

class
    : '.' ident
        { $$ = { type: 'class', name: $2 } }
    ;

hash
    : '#' ident
        { $$ = { type: 'id', name: $2 } }
    ;

ident
    : IDENT
    | n
    ;

attrib
    : '[' padded_ident ']'
        { $$ = yy.create({ type: 'has_attribute', name: $2 }) }
    | '[' padded_ident '=' padded_ident_or_string ']'
        { $$ = yy.create({ type: 'attribute_equals', name: $2, value: $4 }) }
    | '[' padded_ident CONTAINS padded_ident_or_string ']'
        { $$ = yy.create({ type: 'attribute_contains', name: $2, value: $4 }) }
    | '[' padded_ident DOES_NOT_CONTAIN padded_ident_or_string ']'
        { $$ = yy.create({ type: 'attribute_does_not_contain', name: $2, value: $4 }) }
    | '[' padded_ident CONTAINS_WORD padded_ident_or_string ']'
        { $$ = yy.create({ type: 'attribute_contains_word', name: $2, value: $4 }) }
    | '[' padded_ident CONTAINS_PREFIX padded_ident_or_string ']'
        { $$ = yy.create({ type: 'attribute_contains_prefix', name: $2, value: $4 }) }
    | '[' padded_ident STARTS_WITH padded_ident_or_string ']'
        { $$ = yy.create({ type: 'attribute_starts_with', name: $2, value: $4 }) }
    | '[' padded_ident ENDS_WITH padded_ident_or_string ']'
        { $$ = yy.create({ type: 'attribute_ends_with', name: $2, value: $4 }) }
    ;

padded_ident
    : S ident S
        { $$ = $2 }
    | S ident
        { $$ = $2 }
    | ident S
        { $$ = $1 }
    | ident
        { $$ = $1 }
    ;

padded_ident_or_string
    : padded_ident
    | S string S
        { $$ = $1 }
    | S string
        { $$ = $2 }
    | string S
        { $$ = $1 }
    | string
        { $$ = $1 }
    ;

padded_child_combinator
    : S '>' S
    | S '>'
    | '>' S
    | '>'
    ;

padded_tilde
    : S '~' S
    | S '~'
    | '~' S
    | '~'
    ;

padded_plus
    : S '+' S
    | S '+'
    | '+' S
    | '+'
    ;

string
    : SINGLE_QUOTED_STRING
        { $$ = $1.substr(1, $1.length - 2) }
    | DOUBLE_QUOTED_STRING
        { $$ = $1.substr(1, $1.length - 2) }
    ;

pseudo
    : ':' func
        { $$ = yy.create({ type: 'pseudo_func', func: $2 }) }
    | ':' ident
        { $$ = yy.create({ type: 'pseudo_class', name: $2 }) }
    ;

func
    : ident ODD_ARGUMENT
        { $$ = { type: 'function', name: $1, args: { type: 'odd' } } }
    | ident EVEN_ARGUMENT
        { $$ = { type: 'function', name: $1, args: { type: 'even' } } }
    | ident '(' func_arguments ')'
        { $$ = { type: 'function', name: $1, args: $3 } }
    | ident '(' INTEGER ')'
        { $$ = { type: 'function', name: $1, args: $3 } }
    | ident '(' ')'
        { $$ = { type: 'function', name: $1 } }
    ;

func_arguments
    : selector_list
    | an_plus_b
    ;

an_plus_b
    : 'odd'
        { $$ = { type: 'odd' } }
    | 'even'
        { $$ = { type: 'even' } }
    | negative_integer 'n' signed_integer
        { $$ = { type: 'an_plus_b', a: $1, b: $3 } }
    | positive_integer 'n' signed_integer
        { $$ = { type: 'an_plus_b', a: $1, b: $3 } }
    | unsigned_integer 'n' signed_integer
        { $$ = { type: 'an_plus_b', a: $1, b: $3 } }
    | '-' 'n' signed_integer
        { $$ = { type: 'an_plus_b', a: -1, b: $3 } }
    | 'n' signed_integer
        { $$ = { type: 'n_plus_b', b: $2 } }
    | negative_integer 'n'
        { $$ = { type: 'an', a: $1 } }
    | unsigned_integer 'n'
        { $$ = { type: 'an', a: $1 } }
    ;

signed_integer
    : positive_integer
    | negative_integer
    ;

negative_integer
    : NEGATIVE_INTEGER
      { $$ = Number($1) }
    ;

positive_integer
    : POSITIVE_INTEGER
      { $$ = Number($1) }
    ;

unsigned_integer
    : INTEGER
      { $$ = Number($1) }
    ;

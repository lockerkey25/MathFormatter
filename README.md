# Math Formatter

Type shortcut words and they auto-format into visual math structures. If the conversion is unintended, press Backspace to revert.

| Shortcut | Output | LaTeX output |
|-----------|----------|-------------|
| `sqrt` | visual square root | `\sqrt{x}` |
| `frac` | fraction with slots | `\frac{a}{b}` |
| `int` | integral with bounds | `\int_{a}^{b}` |
| `sum` | summation | `\sum_{i=0}^{n}` |
| `rightarrow` | right arrow | `\rightarrow` |
| `subset` | subset symbol | `\subset` |
| `forall` | for all | `\forall` |
| `vec{x}` | vector notation | `\vec{x}` |

## Navigation

- Arrow keys move between slots (numerator, denominator, exponent, etc.)
- Space acts as Tab, moving to the next slot
- Tab exits the current block and moves right
- Shift+Tab moves to the previous block
- Backspace on an empty slot reverts the auto-format back to text
- Up/Down inside a fraction moves between numerator and denominator
- Ctrl+A selects all content in the editor
- Ctrl+Z undo last action
- Fractions are created by typing `/` after a numerator expression
- Parentheses auto-close when you type `(`
- Click the LaTeX output bar to copy raw LaTeX to clipboard

## Next - deploy to google docs


1. Go to [script.google.com](https://script.google.com) and create a new project
2. Replace `Code.gs` contents with the file from this repo
3. File > New > HTML > name it `Sidebar` > paste `Sidebar.html` contents
4. Click the gear icon > check "Show appsscript.json" > paste `appsscript.json`
5. Click Deploy > Test deployments > select a Google Doc > run

## Supported Shortcuts

### Common
`sqrt`, `cbrt`, `nthroot`, `frac`, `int`, `sum`, `prod`, `^`, `_`, `<=`, `>=`, `->`

### Greek Letters
Lowercase: `alpha`, `beta`, `gamma`, `delta`, `epsilon`, `zeta`, `eta`, `theta`, `iota`, `kappa`, `lambda`, `mu`, `nu`, `xi`, `rho`, `sigma`, `tau`, `upsilon`, `phi`, `chi`, `psi`, `omega`

Uppercase: `Gamma`, `Delta`, `Theta`, `Lambda`, `Xi`, `Pi`, `Sigma`, `Phi`, `Psi`, `Omega`

### Arrows
`rightarrow`, `leftarrow`, `leftrightarrow`, `Rightarrow`, `Leftarrow`, `Leftrightarrow`, `uparrow`, `downarrow`, `mapsto`, `longrightarrow`, `longleftarrow`, `hookrightarrow`, `hookleftarrow`, `nearrow`, `searrow`, `nwarrow`

### Set Theory and Logic
`in`, `notin`, `subset`, `supset`, `subseteq`, `supseteq`, `cup`, `cap`, `emptyset`, `forall`, `exists`, `nexists`, `neg`, `land`, `lor`, `implies`, `iff`, `setminus`

### Calculus and Analysis
`int`, `iint`, `iiint`, `oint`, `partial`, `nabla`, `infty`, `lim`, `sum`, `prod`, `coprod`, `bigcup`, `bigcap`

### Relations and Operators
`neq`, `approx`, `equiv`, `cong`, `sim`, `propto`, `pm`, `mp`, `times`, `div`, `cdot`, `circ`, `oplus`, `otimes`, `perp`, `parallel`

### Accents and Decorations
`hat{x}`, `bar{x}`, `vec{x}`, `dot{x}`, `ddot{x}`, `tilde{x}`, `overline{x}`, `underline{x}`, `widehat{x}`, `widetilde{x}`, `overrightarrow{x}`, `overbrace{x}`

### Brackets and Delimiters
`( )`, `[ ]`, `{ }`, `langle`/`rangle`, `lceil`/`rceil`, `lfloor`/`rfloor`, `| |`, `|| ||`

### Matrices
`matrix`, `pmatrix`, `bmatrix`, `vmatrix`, `Bmatrix` (use `&` for columns, `\\` for rows)

### Functions
`sin`, `cos`, `tan`, `sec`, `csc`, `cot`, `arcsin`, `arccos`, `arctan`, `sinh`, `cosh`, `tanh`, `ln`, `log`, `exp`, `det`, `min`, `max`, `gcd`, `deg`

### Miscellaneous
`hbar`, `ell`, `Re`, `Im`, `aleph`, `wp`, `angle`, `triangle`, `star`, `dagger`, `diamond`, `bullet`, `ldots`, `cdots`, `vdots`, `ddots`
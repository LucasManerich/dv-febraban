# Dv Febraban
 Algoritmo para cálculo do dígito verificador de boletos no padrão Febraban
 
## Instalação

```npm install dv-febraban --save```

## Utilização:

```javascript
import { getCodigoBarrasDv, getDigitoVerificadorGeral, getLinhaDigitavel } from 'dv-febraban'

console.log(getCodigoBarrasDv('80600000003077412922019112820190000000000001'));
// retorna: 80690000003077412922019112820190000000000001

console.log(getDigitoVerificadorGeral('80600000003077412922019112820190000000000001'));
// retorna: 9

console.log(getLinhaDigitavel('8069000003077412922019112820190000000000001'));
// retorna: 80690000030 8 77412922019 0 11282019000 0 0000000001 8
```

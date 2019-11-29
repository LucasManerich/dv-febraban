# Dv Febraban
 Algoritmo para cálculo do dígito verificador de boletos no padrão Febraban

### Utilização:

```javascript
import { getCodigoBarrasDv, getDigitoVerificador, getLinhaDigitavel } from 'dv-febraban'

getCodigoBarrasDv('80600000003077412922019112820190000000000001'); 
// retorna: 8069000003077412922019112820190000000000001

getDigitoVerificadorGeral('80600000003077412922019112820190000000000001'); 
// retorna: 9

getLinhaDigitavel('8069000003077412922019112820190000000000001');
// retorna: 80690000003 5 07741292201 3 91128201900 7 00000000001 8
```

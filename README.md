# Dv Febraban
 Algoritmo para cálculo do dígito verificador de boletos no padrão Febraban

### Utilização:

```javascript
import { getCodigoBarrasDv, getDigitoVerificador } from 'dv-febraban'

getCodigoBarrasDv('80600000003077412922019112820190000000000001'); 
// retorna: 8069000003077412922019112820190000000000001

getDigitoVerificador('80600000003077412922019112820190000000000001'); 
// retorna: 9
```

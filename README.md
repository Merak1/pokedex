# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Notas del autor

El requerimiento sobre el límite de 151 pokemones, tuve un par de ideas, al final quedó como quedó para respetar el uso del endpoint "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20" y no hacer otros fixxes que implicaran llamar a la API de otra manera.

Al principio para el requerimiento de que sólo pueda mostrar 151 pokemones lo manejé de otra manera, cada llamada al endpoint de la Api regresaba los datos correspondientes:

a la lista de pokemones además de tener un dato llamado "next" dónde subía el número de offset por 20 puntos, correspondientemente a el límite establecido, así como un dato llamado "previous" que era igual unendpint con el valor de offset reducido por 20 puntos. La idea detras de modificar directamente los valores de offset y limits en el URL de nuestro fetch nos da un control más específico sobre la cantidad de elementos retornados y su distribución.

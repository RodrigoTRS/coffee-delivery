import expresso from './assets/coffees/expresso.svg'
import expressoAmericano from './assets/coffees/americano.svg'
import expressoCremoso from './assets/coffees/expresso_cremoso.svg'
import expressoGelado from './assets/coffees/cafe_gelado.svg'
import cafeComLeite from './assets/coffees/cafe_com_leite.svg'
import latte from './assets/coffees/latte.svg'
import capuccino from './assets/coffees/capuccino.svg'
import macchiato from './assets/coffees/macchiato.svg'

export const Products = [
    {
        id: 1,
        img_path: `${expresso}`,
        tags: ['Tradicional'],
        title: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: 9.9,
    },
    {
        id: 2,
        img_path: `${expressoAmericano}`,
        tags: ['Tradicional'],
        title: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        price: 9.9,
    },
    {
        id: 3,
        img_path: `${expressoCremoso}`,
        tags: ['Tradicional'],
        title: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        price: 9.9,
    },
    {
        id: 4,
        img_path: `${expressoGelado}`,
        tags: ['Tradicional', 'Gelado'],
        title: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        price: 9.9,
    },
    {
        id: 5,
        img_path: `${cafeComLeite}`,
        tags: ['Tradicional', 'Com leite'],
        title: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        price: 9.9,
    },
    {
        id: 6,
        img_path: `${latte}`,
        tags: ['Tradicional', 'Com leite'],
        title: 'Latte',
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        price: 9.9,
    },
    {
        id: 7,
        img_path: `${capuccino}`,
        tags: ['Tradicional', 'Com leite'],
        title: 'Capuccino',
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        price: 9.9,
    },
    {
        id: 8,
        img_path: `${macchiato}`,
        tags: ['Tradicional', 'Com leite'],
        title: 'Macchiato',
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        price: 9.9,
    }
]
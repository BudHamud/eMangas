const mangas = [
    {
        id: '1',
        nombre: 'Oldboy 1',
        precio: 3900,
        img: '/manga1.jpg',
        categoria: 'seinen'
    },
    {
        id: '2',
        nombre: '20th Century Boys 1',
        precio: 3950,
        img: '/manga2.jpg',
        categoria: 'seinen'
    },
    {
        id: '3',
        nombre: 'Banana Fish 6',
        precio: 1900,
        img: '/manga3.jpg',
        categoria: 'josei'
    }
]

export const gFetch = (id) => {
    return new Promise( ( aceptado, rechazado)=> {
        setTimeout(()=>{
            aceptado(id  ? mangas.find(manga => manga.id === id) : mangas)
        }, 1000 )
    } )
}

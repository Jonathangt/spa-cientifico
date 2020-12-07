const getHash = () =>  
    //Parseo el valor de #/1/ ['', '1'. '']
    //slice elimino el #
    //toLocaleLowerCase regreso siempre el valor a minuscula
    //split convierto la cadena de string a arreglo y elimino los '/' 
        //y como solo necesito el '1' paso la posicion del elemento [1]
    
    //en caso de que no encuentra la ruta se envia el '/'
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';

export default getHash;



class Node {
    constructor(valor){
        this.valor = valor;
        this.izquierda = null;
        this.derecha = null;
    }
}
class BinaryTree{
    constructor(){
        this.root = null;
    }

    insertar(valor){
        const newNode = new Node(valor);
        if(this.root === null){
            this.root = newNode;
        } else {
            
            let currentNode = this.root;

            while(true){
                if(valor < currentNode.valor){
                    if(currentNode.izquierda === null){
                        currentNode.izquierda = newNode;
                        return true;
                    }

                    currentNode = currentNode.izquierda;
                } else {
                    if(currentNode.derecha === null){
                        currentNode.derecha = newNode;
                        return true;
                    }
                    currentNode = currentNode.deraecha;
                }
            }
        }
    }
//  verValor(){
//    return this.root       Esta funcion no aporta nada estaba demas en el codigo no ejecuta nada.
  //}
    buscar(valor){
        let currentNode = this.root;

        while(currentNode !== null){  
            if(valor === currentNode.valor){ 
            //Modificamos el true hacemos que muestre si el  valor es igual y cambia la siguinete posicion y si es igual vuelve hacer lo mismo hasta que no sean iguales.
                console.log(currentNode.valor);
                currentNode = currentNode.derecha;
                if(currentNode === null){
                    return true;
                }
            } else if(valor < currentNode.valor){
                currentNode = currentNode.izquierda;
            } else {
                currentNode = currentNode.derecha;
            }
        }
        return false;
    }
}


const tree = new BinaryTree();
const nums = [1,2,3,2,2,2,1,1,1,2,2]

for(let i = 1; i < nums.length; i++){
    tree.insertar(nums[i]);
}

tree.buscar(2);

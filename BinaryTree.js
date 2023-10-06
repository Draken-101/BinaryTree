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
                    currentNode = currentNode.derecha;
                }
            }
        }
    }aa
    verValor(){
        return this.root;
    }

    buscar(valor){
        let currentNode = this.root;

        while(currentNode !== null){
            if(valor === currentNode.valor){
                return true;
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

for(let i = 1; i < 6; i++){
    tree.insertar(i);
}

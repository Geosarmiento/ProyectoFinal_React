
import { useState, useEffect, createContext } from "react";

//3 importamos metodos de firebase para obtener los datos de la base de datos
import { collection, query, getDocs, documentId, where} from "firebase/firestore";
import {db} from "../Components/Firebase/FirebaseConfig";



export const ProductsContext = createContext();


export const ItemsProvider = ({ children }) => {
                            //4 creamos un estado inicial
    const [cajas, setCajas] = useState([]);


    //funciones para usar en carrito de comprar
     const [cart, setCart] = useState([]);

   

    // console.log(cart);

        const addCart = (item, quantity) => {
            if(isInCart(item.id)) {
              setCart(cart.map(cajas => {
                return cajas.id === item.id ? { ...cajas, quantity : cajas.quantity + quantity} : cajas
              }));
            }else{
              setCart([ ...cart, { ...item, quantity}]);
            }
        }

   
    const clearCart = () => setCart ([]); 

    const isInCart = (id) => cart.find(cajas => cajas.id === id) ? true : false;

    const removeCart = (id) => setCart(cart.filter(cajas => cajas.id !== id));

    const totalPrice = () => {
      return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
    }

    const totalProduct = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity , 0)
  

//5 aqui hacemos la llamada de firebese
    useEffect(() =>{
                             //creamos funcion
        const getCajas = async () =>{
            const q = query(collection(db, "cajas")); 
               // where("categoria", "==", "Tapa y Base")); esto es para filtar desde firebase
                
          const docs = [];

            const querySnapshot = await getDocs(q)

                                    //console.log(querySnapshot);
                                    // doc.data() is never undefined for query doc snapshots
                                    // console.log(doc.id, " => ", doc.data());
            querySnapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id});

              });
            
            setCajas(docs);

        };
        getCajas();
       

    }, []);





    return(
       <ProductsContext.Provider
       
       value={{ 
            cajas, 
            cart,
            setCart,
            clearCart,
            isInCart,
            removeCart,
            addCart,
            totalPrice,
            totalProduct

            }}>

        

            {children}

       </ProductsContext.Provider>
    )
}
import { useEffect, useState } from "react"

let mounted = false;

const ApiCall = () => {
    
    const [products, setProducts] = useState([])
    const [searchText, setSearchText] = useState("")
    const [isLoading, setLoading] = useState(true)

    // IIFE

    const getData = async () => {
        const response = await fetch(`https://dummyjson.com/products`)
        const res = await response.json()
        const filteredProducts = res.products.filter(product => product.title.toLowerCase().includes(searchText.toLowerCase()))
        setProducts(filteredProducts)
        setLoading(false)
    }

    useEffect(() => { // debouncing
        let timeOut;
        if (!mounted) {
            getData()
            mounted = true
        } else {
            timeOut = setTimeout(() => {
                getData()
            }, 2000); // in --ms
        }
        return () => {
            clearTimeout(timeOut)
        }
    }, [searchText])
    
    return <div>
        <div className="my-2 d-flex justify-content-center">
            <input type="text" placeholder="Query..." onChange={(e) => setSearchText(e.target.value)} value={searchText} className="p-2 border-0 rounded w-50" style={{outline: 0}}/>
        </div>
        <div className="d-flex justify-content-center gap-2 flex-wrap">
            {
                !isLoading && products.map(product => {
                    return <div key={product.id} className="bg-light" style={{width: "15rem"}}>
                        <div>
                            <img src={product.images[0]} alt={product.title} style={{aspectRatio: 1/1, objectFit: "contain", width: "15rem"}}/>
                        </div>
                        <div className="text-center">
                            <h5>{product.title}</h5>
                        </div>
                    </div>
                })
            }
            {
                isLoading && "Loading..."
            }
        </div>
    </div>
}

export default ApiCall

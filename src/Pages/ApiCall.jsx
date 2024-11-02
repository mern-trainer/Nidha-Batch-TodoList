import axios from "axios";
import { useEffect, useState } from "react"
import { api } from "../axios";

let mounted = false;

const ApiCall = () => {
    
    const [products, setProducts] = useState([])
    const [searchText, setSearchText] = useState("")
    const [isLoading, setLoading] = useState(true)
    const [pages, setPages] = useState(-1)
    const [currentPage, setCurrentPage] = useState(1)

    // IIFE

    const getData = async () => {
        const limit = 20
        const skip = (currentPage - 1) * 20
        const response = await api.get(`?skip=${skip}&limit=${limit}`)
        const res = response.data
        if (pages == -1) {
            setPages(Math.ceil(res.total / limit))
        }
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
    }, [searchText, currentPage])
    
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
        <div className="my-3 d-flex gap-3 justify-content-center">
            {
                pages > -1 && new Array(pages).fill(0).map((_, index) => index + 1).map(label => {
                    return <button className="bg-success border-0 rounded-circle text-light" style={{width: "30px", height: "30px"}} key={label} onClick={() => setCurrentPage(label)}>{label}</button>
                })
            }
        </div>
    </div>
}

export default ApiCall

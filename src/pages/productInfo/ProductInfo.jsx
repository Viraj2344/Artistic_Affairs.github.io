import React, { useContext, useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import myContext from '../../context/data/myContext';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { doc, getDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { addToCart } from '../../redux/cartSlice';
import { fireDB } from '../../fireabase/FirebaseConfig';

function ProductInfo() {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const [product, setProduct] = useState(null);

    const params = useParams();

    const getProductData = async () => {
        setLoading(true);
        try {
            const productTemp = await getDoc(doc(fireDB, "products", params.id));
            setProduct(productTemp?.data());
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
            // Handle error (e.g., display an error message to the user)
        }
    };

    useEffect(() => {
        getProductData();
    }, []);

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);

    const handlePhoneModelChange = (event) => {
        const selectedModel = event.target.value;
        dispatch(setSelectedPhoneModel(selectedModel));
      };

    const addCart = () => {
        dispatch(addToCart({ ...product }));
        toast.success('Added to cart');
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <Layout>
            <section className="text-gray-800 body-font overflow-hidden bg-gray-100">
                <div className="container px-5 py-10 mx-auto">
                    {loading && <p>Loading...</p>}
                    {product && (
                        <div className="lg:w-4/5 mx-auto flex flex-wrap">
                            <img
                                alt="ecommerce"
                                className="lg:w-1/2 w-full lg:h-full object-cover object-center rounded"
                                src={product.imageUrl}
                            />
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0"
                            style={{ fontFamily:'Lilita One' }}>
                                <h2 className="text-sm title-font text-gray-600 tracking-widest">
                                    ARTISTIC AFFAIRS
                                </h2>
                                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1"
                                style={{ fontFamily:'Lilita One' }}>
                                    {product.title}
                                </h1>
                                <p className="leading-relaxed border-b-2 mb-5 pb-5">
                                    {product.description}
                                </p>
                                
                                <div className="flex flex-col ">
                                    
                                   <span className="title-font mb-5 font-medium text-2xl text-gray-900">
                                        <s >₹{product.price}</s>
                                        <p>₹{product.discountprice}</p>
                                    </span>
                                   
                                    
                               

                  
                                 {/* Dropdown code */}
                                 <select 
         onChange={(e) => dispatch(setSelectedPhoneModel(e.target.value))}
    className="mr-auto p-2 border border-gray-300 rounded-md"
>
    <option value="" disabled>Select a phone model</option>

    {/* iPhone */}
    <option value="iPhone 3G">iPhone 3G</option>
    <option value="iPhone 3GS">iPhone 3GS</option>
    <option value="iPhone 4">iPhone 4</option>
    <option value="iPhone 4S">iPhone 4S</option>
    <option value="iPhone 5">iPhone 5</option>
    <option value="iPhone 5C">iPhone 5C</option>
    <option value="iPhone 5S">iPhone 5S</option>
    <option value="iPhone 6">iPhone 6</option>
    <option value="iPhone 6 Plus">iPhone 6 Plus</option>
    <option value="iPhone 6S">iPhone 6S</option>
    <option value="iPhone 6S Plus">iPhone 6S Plus</option>
    <option value="iPhone SE (1st generation)">iPhone SE (1st generation)</option>
    <option value="iPhone 7">iPhone 7</option>
    <option value="iPhone 7 Plus">iPhone 7 Plus</option>
    <option value="iPhone 8">iPhone 8</option>
    <option value="iPhone 8 Plus">iPhone 8 Plus</option>
    <option value="iPhone X">iPhone X</option>
    <option value="iPhone XS">iPhone XS</option>
    <option value="iPhone XS Max">iPhone XS Max</option>
    <option value="iPhone XR">iPhone XR</option>
    <option value="iPhone 11">iPhone 11</option>
    <option value="iPhone 11 Pro">iPhone 11 Pro</option>
    <option value="iPhone 11 Pro Max">iPhone 11 Pro Max</option>
    <option value="iPhone SE (2nd generation)">iPhone SE (2nd generation)</option>
    <option value="iPhone 12 Mini">iPhone 12 Mini</option>
    <option value="iPhone 12">iPhone 12</option>
    <option value="iPhone 12 Pro">iPhone 12 Pro</option>
    <option value="iPhone 12 Pro Max">iPhone 12 Pro Max</option>
    <option value="iPhone 13 Mini">iPhone 13 Mini</option>
    <option value="iPhone 13">iPhone 13</option>
    <option value="iPhone 13 Pro">iPhone 13 Pro</option>
    <option value="iPhone 13 Pro Max">iPhone 13 Pro Max</option>

    {/* OnePlus */}
    <option value="OnePlus One">OnePlus One</option>
    <option value="OnePlus 2">OnePlus 2</option>
    <option value="OnePlus X">OnePlus X</option>
    <option value="OnePlus 3">OnePlus 3</option>
    <option value="OnePlus 3T">OnePlus 3T</option>
    <option value="OnePlus 5">OnePlus 5</option>
    <option value="OnePlus 5T">OnePlus 5T</option>
    <option value="OnePlus 6">OnePlus 6</option>
    <option value="OnePlus 6T">OnePlus 6T</option>
    <option value="OnePlus 7">OnePlus 7</option>
    <option value="OnePlus 7 Pro">OnePlus 7 Pro</option>
    <option value="OnePlus 7T">OnePlus 7T</option>
    <option value="OnePlus 7T Pro">OnePlus 7T Pro</option>
    <option value="OnePlus 8">OnePlus 8</option>
    <option value="OnePlus 8 Pro">OnePlus 8 Pro</option>
    <option value="OnePlus Nord">OnePlus Nord</option>
    <option value="OnePlus 8T">OnePlus 8T</option>
    <option value="OnePlus 9">OnePlus 9</option>
    <option value="OnePlus 9 Pro">OnePlus 9 Pro</option>
    <option value="OnePlus 9R">OnePlus 9R</option>

    {/* Samsung */}
    <option value="Samsung S23 Ultra">Samsung S23 Ultra</option>
<option value="Samsung S23 Plus">Samsung S23 Plus</option>
<option value="Samsung S23">Samsung S23</option>
<option value="Samsung S22 Ultra">Samsung S22 Ultra</option>
<option value="Samsung S22 Plus">Samsung S22 Plus</option>
<option value="Samsung S22">Samsung S22</option>
<option value="Samsung S21 Ultra">Samsung S21 Ultra</option>
<option value="Samsung S21 Plus">Samsung S21 Plus</option>
<option value="Samsung S21 FE">Samsung S21 FE</option>
<option value="Samsung S21">Samsung S21</option>
<option value="Samsung S20 Plus">Samsung S20 Plus</option>
<option value="Samsung S20 FE">Samsung S20 FE</option>
<option value="Samsung S20">Samsung S20</option>
<option value="Samsung S10 Lite">Samsung S10 Lite</option>
<option value="Samsung S10 Plus">Samsung S10 Plus</option>
<option value="Samsung S10">Samsung S10</option>
<option value="Samsung S9 Plus">Samsung S9 Plus</option>
<option value="Samsung Note 20 ultra">Samsung Note 20 ultra</option>
<option value="Samsung note 20">Samsung note 20</option>
<option value="Samsung note 10 Pro">Samsung note 10 Pro</option>
<option value="Samsung note 10 Plus">Samsung note 10 Plus</option>
<option value="Samsung note 10 lite">Samsung note 10 lite</option>
<option value="Samsung note 10">Samsung note 10</option>
<option value="Samsung M62">Samsung M62</option>
<option value="Samsung M53 5G">Samsung M53 5G</option>
<option value="Samsung M52 5G">Samsung M52 5G</option>
<option value="Samsung M33 5G">Samsung M33 5G</option>
<option value="Samsung M32 4G">Samsung M32 4G</option>
<option value="Samsung M31s">Samsung M31s</option>
<option value="Samsung M31">Samsung M31</option>
<option value="Samsung M31 prime">Samsung M31 prime</option>
<option value="Samsung M30s">Samsung M30s</option>
<option value="Samsung M22">Samsung M22</option>
<option value="Samsung F62">Samsung F62</option>
<option value="Samsung F41">Samsung F41</option>
<option value="Samsung F23 5G">Samsung F23 5G</option>
<option value="Samsung F22">Samsung F22</option>
<option value="Samsung A73 5G">Samsung A73 5G</option>
<option value="Samsung A72 5G">Samsung A72 5G</option>
<option value="Samsung A71">Samsung A71</option>
<option value="Samsung A70/A70s">Samsung A70/A70s</option>
<option value="Samsung A53 5G">Samsung A53 5G</option>
<option value="Samsung A52/A52s 4G/5G">Samsung A52/A52s 4G/5G</option>
<option value="Samsung A51">Samsung A51</option>
<option value="Samsung A50/A50s/A30s">Samsung A50/A50s/A30s</option>
<option value="Samsung A42">Samsung A42</option>
<option value="Samsung A33 5G">Samsung A33 5G</option>
<option value="Samsung A32 5G">Samsung A32 5G</option>
<option value="Samsung A32 4G">Samsung A32 4G</option>
<option value="Samsung A31">Samsung A31</option>
<option value="Samsung A30s">Samsung A30s</option>
<option value="Samsung A22 5G">Samsung A22 5G</option>
<option value="Samsung A22">Samsung A22</option>
<option value="Samsung A21">Samsung A21</option>
<option value="Samsung A12">Samsung A12</option>

    {/* Vivo */}
    <option value="Vivo X5">Vivo X5</option>
    <option value="Vivo X6">Vivo X6</option>
    <option value="Vivo X7">Vivo X7</option>
    <option value="Vivo X9">Vivo X9</option>
    <option value="Vivo X20">Vivo X20</option>
    <option value="Vivo X21">Vivo X21</option>
    <option value="Vivo X30">Vivo X30</option>
    <option value="Vivo X50">Vivo X50</option>
    <option value="Vivo X60">Vivo X60</option>
    <option value="Vivo X70">Vivo X70</option>

    {/* Oppo */}
    <option value="Oppo Find 5">Oppo Find 5</option>
    <option value="Oppo Find 7">Oppo Find 7</option>
    <option value="Oppo Find X">Oppo Find X</option>
    <option value="Oppo R7">Oppo R7</option>
    <option value="Oppo R9">Oppo R9</option>
    <option value="Oppo R11">Oppo R11</option>
    <option value="Oppo R15">Oppo R15</option>
    <option value="Oppo R17">Oppo R17</option>
    <option value="Oppo R19">Oppo R19</option>
    <option value="Oppo F1">Oppo F1</option>
    <option value="Oppo F3">Oppo F3</option>
    <option value="Oppo F5">Oppo F5</option>
    <option value="Oppo F7">Oppo F7</option>
    <option value="Oppo F9">Oppo F9</option>
    <option value="Oppo F11">Oppo F11</option>
    <option value="Oppo F15">Oppo F15</option>
    <option value="Oppo A1">Oppo A1</option>
    <option value="Oppo A3">Oppo A3</option>
    <option value="Oppo A5">Oppo A5</option>
    <option value="Oppo A7">Oppo A7</option>
    <option value="Oppo A9">Oppo A9</option>
    <option value="Oppo A11">Oppo A11</option>
    <option value="Oppo A15">Oppo A15</option>
    <option value="Oppo A31">Oppo A31</option>
    <option value="Oppo A53">Oppo A53</option>
    <option value="Oppo A71">Oppo A71</option>
    <option value="Oppo A73">Oppo A73</option>
    <option value="Oppo A83">Oppo A83</option>
    <option value="Oppo A91">Oppo A91</option>
    <option value="Oppo A92">Oppo A92</option>
    <option value="Oppo A93">Oppo A93</option>
    <option value="Oppo Reno">Oppo Reno</option>
    <option value="Oppo Reno 2">Oppo Reno 2</option>
    <option value="Oppo Reno 3">Oppo Reno 3</option>
    <option value="Oppo Reno 4">Oppo Reno 4</option>
    <option value="Oppo Reno 5">Oppo Reno 5</option>
    <option value="Oppo Reno 6">Oppo Reno 6</option>

    {/* Realme */}
    <option value="Realme 1">Realme 1</option>
    <option value="Realme 2">Realme 2</option>
    <option value="Realme 3">Realme 3</option>
    <option value="Realme 5">Realme 5</option>
    <option value="Realme 6">Realme 6</option>
    <option value="Realme 7">Realme 7</option>
    <option value="Realme 8">Realme 8</option>
    <option value="Realme C1">Realme C1</option>
    <option value="Realme C2">Realme C2</option>
    <option value="Realme C3">Realme C3</option>
    <option value="Realme C11">Realme C11</option>
    <option value="Realme C12">Realme C12</option>
    <option value="Realme C15">Realme C15</option>
    <option value="Realme XT">Realme XT</option>
    <option value="Realme X2">Realme X2</option>
    <option value="Realme X3">Realme X3</option>
    <option value="Realme X50">Realme X50</option>
    <option value="Realme X7">Realme X7</option>
    <option value="Realme Narzo 10">Realme Narzo 10</option>
    <option value="Realme Narzo 20">Realme Narzo 20</option>
    <option value="Realme Narzo 30">Realme Narzo 30</option>
    <option value="Realme GT">Realme GT</option>

    <option value="Xiaomi Mi 1">Xiaomi Mi 1</option>
    <option value="Xiaomi Mi 2">Xiaomi Mi 2</option>
    <option value="Xiaomi Mi 3">Xiaomi Mi 3</option>
    <option value="Xiaomi Mi 4">Xiaomi Mi 4</option>
    <option value="Xiaomi Mi 5">Xiaomi Mi 5</option>
    <option value="Xiaomi Mi 6">Xiaomi Mi 6</option>
    <option value="Xiaomi Mi 8">Xiaomi Mi 8</option>
    <option value="Xiaomi Mi 9">Xiaomi Mi 9</option>
    <option value="Xiaomi Mi 10">Xiaomi Mi 10</option>
    <option value="Xiaomi Mi 11">Xiaomi Mi 11</option>
    <option value="Xiaomi Redmi 1S">Xiaomi Redmi 1S</option>
    <option value="Xiaomi Redmi 2">Xiaomi Redmi 2</option>
    <option value="Xiaomi Redmi 3">Xiaomi Redmi 3</option>
    <option value="Xiaomi Redmi 4">Xiaomi Redmi 4</option>
    <option value="Xiaomi Redmi 5">Xiaomi Redmi 5</option>
    <option value="Xiaomi Redmi 6">Xiaomi Redmi 6</option>
    <option value="Xiaomi Redmi 7">Xiaomi Redmi 7</option>
    <option value="Xiaomi Redmi 8">Xiaomi Redmi 8</option>
    <option value="Xiaomi Redmi 9">Xiaomi Redmi 9</option>
    <option value="Xiaomi Redmi 10">Xiaomi Redmi 10</option>
    <option value="Xiaomi Redmi Note 2">Xiaomi Redmi Note 2</option>
    <option value="Xiaomi Redmi Note 3">Xiaomi Redmi Note 3</option>
    <option value="Xiaomi Redmi Note 4">Xiaomi Redmi Note 4</option>
    <option value="Xiaomi Redmi Note 5">Xiaomi Redmi Note 5</option>
    <option value="Xiaomi Redmi Note 6">Xiaomi Redmi Note 6</option>
    <option value="Xiaomi Redmi Note 7">Xiaomi Redmi Note 7</option>
    <option value="Xiaomi Redmi Note 8">Xiaomi Redmi Note 8</option>
    <option value="Xiaomi Redmi Note 9">Xiaomi Redmi Note 9</option>
    <option value="Xiaomi Redmi Note 10">Xiaomi Redmi Note 10</option>
    <option value="Xiaomi Poco X2">Xiaomi Poco X2</option>
    <option value="Xiaomi Poco X3">Xiaomi Poco X3</option>
    <option value="Xiaomi Poco M2">Xiaomi Poco M2</option>
    <option value="Xiaomi Poco M3">Xiaomi Poco M3</option>
    <option value="Xiaomi Black Shark">Xiaomi Black Shark</option>
    <option value="Xiaomi Black Shark 2">Xiaomi Black Shark 2</option>
    <option value="Xiaomi Black Shark 3">Xiaomi Black Shark 3</option>

    {/* Huawei */}
    <option value="Huawei Ascend P6">Huawei Ascend P6</option>
    <option value="Huawei Ascend P7">Huawei Ascend P7</option>
    <option value="Huawei Mate 7">Huawei Mate 7</option>
    <option value="Huawei Mate 8">Huawei Mate 8</option>
    <option value="Huawei Mate 9">Huawei Mate 9</option>
    <option value="Huawei Mate 10">Huawei Mate 10</option>
    <option value="Huawei Mate 20">Huawei Mate 20</option>
    <option value="Huawei Mate 30">Huawei Mate 30</option>
    <option value="Huawei P6">Huawei P6</option>
    <option value="Huawei P7">Huawei P7</option>
    <option value="Huawei P8">Huawei P8</option>
    <option value="Huawei P9">Huawei P9</option>
    <option value="Huawei P10">Huawei P10</option>
    <option value="Huawei P20">Huawei P20</option>
    <option value="Huawei P30">Huawei P30</option>
    <option value="Huawei P40">Huawei P40</option>
    <option value="Huawei Nova">Huawei Nova</option>
    <option value="Huawei Nova 2">Huawei Nova 2</option>
    <option value="Huawei Nova 3">Huawei Nova 3</option>
    <option value="Huawei Nova 4">Huawei Nova 4</option>
    <option value="Huawei Y3">Huawei Y3</option>
    <option value="Huawei Y5">Huawei Y5</option>
    <option value="Huawei Y6">Huawei Y6</option>
    <option value="Huawei Y7">Huawei Y7</option>
    <option value="Huawei Y9">Huawei Y9</option>
    <option value="Huawei Honor 6">Huawei Honor 6</option>
    <option value="Huawei Honor 7">Huawei Honor 7</option>
    <option value="Huawei Honor 8">Huawei Honor 8</option>
    <option value="Huawei Honor 9">Huawei Honor 9</option>
    <option value="Huawei Honor 10">Huawei Honor 10</option>

                                
                                    </select>
                                    <button
    onClick={addCart}
    className="mt-5 flex items-center justify-center text-black bg-yellow-500 border-0 py-2 px-4 focus:outline-none hover:bg-orange-400 rounded-md transition-all duration-300 ease-in-out"
>
    Add To Cart
</button>

                                    </div>
                                    {/* End of dropdown code */}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </Layout>
    );
}

export default ProductInfo;
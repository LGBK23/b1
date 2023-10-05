import IndexHeadWeb from "../HeadWeb/IndexHeadWeb";
import Loai_San_Pham from "../ContentWeb/Loai_San_Pham";
import { useEffect, useState } from "react";
function Context()
{
    const [dsLoai_San_Pham, setDSLoai_San_Pham]= useState([])
    useEffect(()=>{
      fetch('http://localhost:9000/get-data.php')
      .then(Response => Response.json())//->đọc nội dung chuyển thành một đối tượng javascrip, được phản hồi là 1 chuỗi json
      .then(json => setDSLoai_San_Pham(json))//là 1 callback
    }, [])
     // Chỉ mục của loại sản phẩm và sản phẩm bạn muốn lấy
  const loaiSanPhamIndex = 1; // Chọn loại sản phẩm thứ hai
  const sanPhamIndex = 1; // Chọn sản phẩm thứ hai trong loại sản phẩm

  // Lấy giá trị img từ vị trí cụ thể
  const img = dsLoai_San_Pham[loaiSanPhamIndex].ds_san_pham[sanPhamIndex].img;
    const ten = dsLoai_San_Pham[0].ds_san_pham[1].name;
  return (
    <>
      <IndexHeadWeb />
      <div>
        <h1>Thông tin sản phẩm:</h1>
        <img src={img} alt={`Sản phẩm ${sanPhamIndex + 1}`} />
      </div>
      <a>{ten}</a>
    </>
  );

}
export default Context;


export default function ProductList() {
  return (
    <div>
      <div class="top-contents">
        <img class="top-img" src="../../img/product01.png" alt="" width="100%" />
      </div>
      <div class="title-contents">
        <div class="title-contents-inner">
          <h2>점토벽돌 -</h2>
        </div>
      </div>

      <div class="container">
        <div class="search-contents">
          <input type="text" placeholder="검색어 입력" id="searchValue" onkeyup="enterkey()" />
          <button class="search-button" onclick="searchProduct()">검색</button>
        </div>

        <div class="wrap">
            <div class="search-contents">
              <button class="search-button" onclick="location.href='/?create';">제품등록</button>
            </div>
          <div class="leftMenu">
            <h2>점토벽돌</h2>
            <ul>
                <li class="<?= $detail_name[$i] === $detail_name[$detail_idx[1] - 1] ? 'active' : '' ?>">
                  <a class="<?= $detail_name[$i] === $detail_name[$detail_idx[1] - 1] ? 'active' : '' ?>" href="/?product01/list/&detail_idx=<?= $detail_num + 1 ?>">

                  </a>
                </li>
            </ul>
          </div>

          <div class="productList" id="list" style="justify-content: center; padding: 120px 0">
            <h4 style="text-align: center">등록된 제품이 없습니다.</h4>
          </div>


          <div class="productList" id="list">
            <div class="productView">
              <div class="productImage">
                <a href="/?product01/detail/&detail_idx=<?= $data_result[$i]['detail_idx'] ?>&product_idx=<?= $data_result[$i]['idx'] ?>"><img src="/data/file/product01/<?= $fileInfo[0]['bf_file'] ?>" class="productImage" /></a>
                <a href="/?product01/detail/&detail_idx=<?= $data_result[$i]['detail_idx'] ?>&product_idx=<?= $data_result[$i]['idx'] ?>"><img src="./img/non_img.jpg" class="productImage" alt="제품 이미지" /></a>
              </div>
              <div class="productInfo">
                <span class="productName"><a href="/?product01/detail/&detail_idx=<?= $data_result[$i]['detail_idx'] ?>&product_idx=<?= $data_result[$i]['idx'] ?>"></a></span>
                <span class="productName">제품규격 : </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav aria-label="Page navigation">
        <ul class="pagination justify-content-center" id="pageNavigation"></ul>
      </nav>
    </div>
  )
}
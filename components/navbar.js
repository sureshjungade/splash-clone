let navbar = () =>{
    return `<div id="search_bar">
    <input type="text" placeholder="Search here" id="query">
    <div id="select">
    <select name="sorting" id="sorting">
            <option value="">Sorting</option>
            <option value="latest">latest</option>
            <option value="oldest">oldest</option>
            <option value="popular">popular</option>
    </select>
    <select name="filter" id="filter">
            <option value="">Filter</option>
            <option value="landscape">landscape</option>
            <option value="portrait">portrait</option>
            <option value="squarish">squarish</option>
    </select>
    </div>
</div>
<div id="categories">
    <h3 id="Nature">Nature</h3>
    <h3 id="Cars">Cars</h3>
    <h3 id="Music">Music</h3>
    <h3 id="Cartoons">Cartoons</h3>
    <h3 id="Technology">Technology</h3>
    <h3 id="Marvel">Marvel</h3>
</div>`;
}
export {navbar}
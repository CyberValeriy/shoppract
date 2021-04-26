const list = document.querySelector('select');
const query = location.search.slice(8);
if(query == 'DESC'){
list.getElementsByTagName('option')[0].setAttribute("selected","");
}else{
list.getElementsByTagName('option')[1].setAttribute("selected","");
};
function sort(){
  for (i = 1; i < (document.getElementsByTagName('p').length - 1); i++){
    document.getElementsByTagName('p')[i].style.display = 'none';
  }
  if (document.getElementById('rarity').value){
    if (document.getElementById('weapons-primary').value){
    } else if (document.getElementById('weapons-primary').value){
      for (i = 0; i < document.getElementsByClassName(document.getElementById('rarity').value).getElementsByClassName(document.getElementById('weapons-primary').value).length; i++){
        document.getElementsByClassName(document.getElementById('rarity').value).getElementsByClassName(document.getElementById('weapons-primary').value)[i].style.display = 'block';
      }
    }  else if (document.getElementById('weapons-secondary').value){
       for (i = 0; i < document.getElementsByClassName(document.getElementById('rarity').value).getElementsByClassName(document.getElementById('weapons-secondary').value).length; i++){
        document.getElementsByClassName(document.getElementById('rarity').value).getElementsByClassName(document.getElementById('weapons-secondary').value)[i].style.display = 'block';
      }
    }  else if (document.getElementById('cosmetics').value){
       for (i = 0; i < document.getElementsByClassName(document.getElementById('rarity').value).getElementsByClassName(document.getElementById('cosmetics').value).length; i++){
        document.getElementsByClassName(document.getElementById('rarity').value).getElementsByClassName(document.getElementById('cosmetics').value)[i].style.display = 'block';
      }
    } else {
      for (i = 0; i < document.getElementsByClassName(document.getElementById('rarity').value).length; i++){
        document.getElementsByClassName(document.getElementById('rarity').value)[i].style.display = 'block';
      }
    }
  } else {
      document.getElementsByTagName('p').sort;
      for (i = 1; i < (document.getElementsByTagName('p').length - 1); i++){
        document.getElementsByTagName('p')[i].style.display = 'block';
      }
  }
}

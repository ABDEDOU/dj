


document.querySelectorAll('.image_vid video ').forEach(vid=>{
    vid.onclick=()=>{
      document.querySelector('.vid').style.display='block';
      document.querySelector('.vid').src = vid.getAttribute('src');
    }
});

document.querySelectorAll('.vid span ').forEach(vid=>{
    vid.onclick=()=>{
    	document.querySelector('.vid').style.display='none';
    }
});
document.querySelectorAll('.im span ').forEach(vid=>{
    vid.onclick=()=>{
    	document.querySelector('.im').style.display='none';
    }
});

document.querySelectorAll('.image_vid img ').forEach(vid=>{
    vid.onclick=()=>{
      document.querySelector('.im ').style.display='block';
      document.querySelector('.im img').src =  vid.getAttribute('src');
    }     
});



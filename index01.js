
const headInput = document.getElementById('heading')
const bodyInput = document.getElementById('body')
const submitInput = document.getElementById('submit')
const form = document.getElementById('form')
const blog = document.getElementById('blogpart')







form.addEventListener('submit', (e) => {

    e.preventDefault();
    const header = document.createElement('h1')
    const paragraph = document.createElement('p')

 header.innerText = headInput.value;
     paragraph.innerText = bodyInput.value;
    
   
    blogpart.append(header)
blogpart.append(paragraph)

    


})
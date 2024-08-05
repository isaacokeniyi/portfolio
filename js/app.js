const http = require('http')
const fs = require('fs')


const homepage = fs.readFileSync('./index.html')
const aboutpage = fs.readFileSync('./aboutme.html')
const contactpage = fs.readFileSync('./contact.html')
const portfoliopage = fs.readFileSync('./portfolio.html')
const resumepage = fs.readFileSync('./resume.html')
const testimonialpage = fs.readFileSync('./testimonial.html')
const homecss = fs.readFileSync('./css/home.css')
const reshomecss = fs.readFileSync('./css/responsive/home.css')
const maincss = fs.readFileSync('./css/main.css')
const resmaincss = fs.readFileSync('./css/responsive/main.css')
const navcss = fs.readFileSync('./css/nav.css')
const resnavcss = fs.readFileSync('./css/responsive/nav.css')
const aboutcss = fs.readFileSync('./css/aboutme.css')
const resaboutcss = fs.readFileSync('./css/responsive/aboutme.css')
const contactcss = fs.readFileSync('./css/contact.css')
const rescontactcss = fs.readFileSync('./css/responsive/contact.css')
const portfoliocss = fs.readFileSync('./css/portfolio.css')
const resportfoliocss = fs.readFileSync('./css/responsive/portfolio.css')
const resumecss = fs.readFileSync('./css/resume.css')
const resresumecss = fs.readFileSync('./css/responsive/resume.css')
const testimonialcss = fs.readFileSync('./css/testimonial.css')
const restestimonialcss = fs.readFileSync('./css/responsive/testimonial.css')
const aboutjs = fs.readFileSync('./js/aboutme.js')
const portfoliojs = fs.readFileSync('./js/portfolio.js')
const profilefaded = fs.readFileSync('./images/profilefaded.png')
const profile = fs.readFileSync('./images/profile.png')
const printdesign = fs.readFileSync('./images/printdesign.png')
const webdesign = fs.readFileSync('./images/webdesign.png')
const photography = fs.readFileSync('./images/photography.png')
const monitor = fs.readFileSync('./images/monitor.png')
const phone = fs.readFileSync('./images/phone.png')
const background = fs.readFileSync('./images/background.jpg')
const graphicsdesign1 = fs.readFileSync('./images/graphicsdesign1.jpg')
const graphicsdesign2 = fs.readFileSync('./images/graphicsdesign2.jpg')
const graphicsdesign3 = fs.readFileSync('./images/graphicsdesign3.jpg')
const graphicsdesign4 = fs.readFileSync('./images/graphicsdesign4.jpg')
const photography1 = fs.readFileSync('./images/photography1.jpg')
const photography2 = fs.readFileSync('./images/photography2.jpg')
const photography3 = fs.readFileSync('./images/photography3.jpg')
const photography4 = fs.readFileSync('./images/photography4.jpg')
const webdesign1 = fs.readFileSync('./images/webdesign1.jpg')
const webdesign2 = fs.readFileSync('./images/webdesign2.jpg')
const webdesign3 = fs.readFileSync('./images/webdesign3.jpg')
const webdesign4 = fs.readFileSync('./images/webdesign4.jpg')
const profile1 = fs.readFileSync('./images/profile1.jpg')
const profile2 = fs.readFileSync('./images/profile2.jpg')
const profile3 = fs.readFileSync('./images/profile3.jpg')
const profile4 = fs.readFileSync('./images/profile4.jpg')



const server = http.createServer((req,res)=>{
    switch (req.url) {
        case '/':
            res.writeHead(200, {'Content-Type' : 'text/html'})
            res.write(homepage)
            res.end()
            break;
        case '/index.html':
            res.writeHead(200, {'Content-Type' : 'text/html'})
            res.write(homepage)
            res.end()
            break;
        case '/aboutme.html':
            res.writeHead(200, {'Content-Type' : 'text/html'})
            res.write(aboutpage)
            res.end()
            break;
        case '/contact.html':
            res.writeHead(200, {'Content-Type' : 'text/html'})
            res.write(contactpage)
            res.end()
            break;
        case '/portfolio.html':
            res.writeHead(200, {'Content-Type' : 'text/html'})
            res.write(portfoliopage)
            res.end()
            break;
        case '/resume.html':
            res.writeHead(200, {'Content-Type' : 'text/html'})
            res.write(resumepage)
            res.end()
            break;
        case '/testimonial.html':
            res.writeHead(200, {'Content-Type' : 'text/html'})
            res.write(testimonialpage)
            res.end()
            break;
        case '/css/main.css':
            res.writeHead(200, {'Content-Type' : 'text/css'})
            res.write(maincss)
            res.end()
            break;
        case '/css/responsive/main.css':
            res.writeHead(200, {'Content-Type' : 'text/css'})
            res.write(resmaincss)
            res.end()
            break;
        case '/css/home.css':
            res.writeHead(200, {'Content-Type' : 'text/css'})
            res.write(homecss)
            res.end()
            break;
        case '/css/responsive/home.css':
            res.writeHead(200, {'Content-Type' : 'text/css'})
            res.write(reshomecss)
            res.end()
            break;
        case '/css/nav.css':
            res.writeHead(200, {'Content-Type' : 'text/css'})
            res.write(navcss)
            res.end()
            break;
        case '/css/responsive/nav.css':
            res.writeHead(200, {'Content-Type' : 'text/css'})
            res.write(resnavcss)
            res.end()
            break;
        case '/css/aboutme.css':
            res.writeHead(200, {'Content-Type' : 'text/css'})
            res.write(aboutcss)
            res.end()
            break;
        case '/css/responsive/aboutme.css':
            res.writeHead(200, {'Content-Type' : 'text/css'})
            res.write(resaboutcss)
            res.end()
            break;
        case '/css/contact.css':
            res.writeHead(200, {'Content-Type' : 'text/css'})
            res.write(contactcss)
            res.end()
            break;
        case '/css/responsive/contact.css':
            res.writeHead(200, {'Content-Type' : 'text/css'})
            res.write(rescontactcss)
            res.end()
            break;
        case '/css/portfolio.css':
            res.writeHead(200, {'Content-Type' : 'text/css'})
            res.write(portfoliocss)
            res.end()
            break;
        case '/css/responsive/portfolio.css':
            res.writeHead(200, {'Content-Type' : 'text/css'})
            res.write(resportfoliocss)
            res.end()
            break;
        case '/css/resume.css':
            res.writeHead(200, {'Content-Type' : 'text/css'})
            res.write(resumecss)
            res.end()
            break;
        case '/css/responsive/resume.css':
            res.writeHead(200, {'Content-Type' : 'text/css'})
            res.write(resresumecss)
            res.end()
            break;
        case '/css/testimonial.css':
            res.writeHead(200, {'Content-Type' : 'text/css'})
            res.write(testimonialcss)
            res.end()
            break;
        case '/css/responsive/testimonial.css':
            res.writeHead(200, {'Content-Type' : 'text/css'})
            res.write(restestimonialcss)
            res.end()
            break;
        case '/js/aboutme.js':
            res.writeHead(200, {'Content-Type' : 'text/javascript'})
            res.write(aboutjs)
            res.end()
            break;
        case '/js/portfolio.js':
            res.writeHead(200, {'Content-Type' : 'text/javascript'})
            res.write(portfoliojs)
            res.end()
            break;
        case '/images/profile.png':
            res.writeHead(200, {'Content-Type' : 'image/png'})
            res.write(profile)
            res.end()
            break;
        case '/images/profilefaded.png':
            res.writeHead(200, {'Content-Type' : 'image/png'})
            res.write(profilefaded)
            res.end()
            break;
        case '/images/printdesign.png':
            res.writeHead(200, {'Content-Type' : 'image/png'})
            res.write(printdesign)
            res.end()
            break;
        case '/images/webdesign.png':
            res.writeHead(200, {'Content-Type' : 'image/png'})
            res.write(webdesign)
            res.end()
            break;
        case '/images/photography.png':
            res.writeHead(200, {'Content-Type' : 'image/png'})
            res.write(photography)
            res.end()
            break;
        case '/images/monitor.png':
            res.writeHead(200, {'Content-Type' : 'image/png'})
            res.write(monitor)
            res.end()
            break;
        case '/images/photography.png':
            res.writeHead(200, {'Content-Type' : 'image/png'})
            res.write(phone)
            res.end()
            break;
        case '/images/background.jpg':
            res.writeHead(200, {'Content-Type' : 'image/jpg'})
            res.write(background)
            res.end()
            break;
        case '/images/graphicsdesign1.jpg':
            res.writeHead(200, {'Content-Type' : 'image/jpg'})
            res.write(graphicsdesign1)
            res.end()
            break;
        case '/images/graphicsdesign2.jpg':
            res.writeHead(200, {'Content-Type' : 'image/jpg'})
            res.write(graphicsdesign2)
            res.end()
            break;
        case '/images/graphicsdesign3.jpg':
            res.writeHead(200, {'Content-Type' : 'image/jpg'})
            res.write(graphicsdesign3)
            res.end()
            break;
        case '/images/graphicsdesign4.jpg':
            res.writeHead(200, {'Content-Type' : 'image/jpg'})
            res.write(graphicsdesign4)
            res.end()
            break;
        case '/images/photography1.jpg':
            res.writeHead(200, {'Content-Type' : 'image/jpg'})
            res.write(photography1)
            res.end()
            break;
        case '/images/photography2.jpg':
            res.writeHead(200, {'Content-Type' : 'image/jpg'})
            res.write(photography2)
            res.end()
            break;
        case '/images/photography3.jpg':
            res.writeHead(200, {'Content-Type' : 'image/jpg'})
            res.write(photography3)
            res.end()
            break;
        case '/images/photography4.jpg':
            res.writeHead(200, {'Content-Type' : 'image/jpg'})
            res.write(photography4)
            res.end()
            break;
        case '/images/webdesign1.jpg':
            res.writeHead(200, {'Content-Type' : 'image/jpg'})
            res.write(webdesign1)
            res.end()
            break;
        case '/images/webdesign2.jpg':
            res.writeHead(200, {'Content-Type' : 'image/jpg'})
            res.write(webdesign2)
            res.end()
            break;
        case '/images/webdesign3.jpg':
            res.writeHead(200, {'Content-Type' : 'image/jpg'})
            res.write(webdesign3)
            res.end()
            break;
        case '/images/webdesign4.jpg':
            res.writeHead(200, {'Content-Type' : 'image/jpg'})
            res.write(webdesign4)
            res.end()
            break;
        case '/images/profile1.jpg':
            res.writeHead(200, {'Content-Type' : 'image/jpg'})
            res.write(profile1)
            res.end()
            break;
        case '/images/profile2.jpg':
            res.writeHead(200, {'Content-Type' : 'image/jpg'})
            res.write(profile2)
            res.end()
            break;
        case '/images/profile3.jpg':
            res.writeHead(200, {'Content-Type' : 'image/jpg'})
            res.write(profile3)
            res.end()
            break;
        case '/images/profile4.jpg':
            res.writeHead(200, {'Content-Type' : 'image/jpg'})
            res.write(profile4)
            res.end()
            break;
        default:
            res.writeHead(404, {'Content-Type' : 'text/html'})
            res.end()
    }
})

server.listen(5000, ()=>{
    console.log("Listening on port 5000........");
})

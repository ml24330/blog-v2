const map = (function () {
    // A list of posts in slugified form
    const posts = []

    // Map of slugified title => number of visits
    const visitmap = {}
    
    // Make requests to each post and populate map
    posts.forEach(async post => {
        res = await fetch(`https://api.countapi.xyz/info/blog.lselawreview.com/${post}`)
        data = await res.json()
        console.log(data.value)
        visitmap[post] = data.value
    })

    return visitmap
})()
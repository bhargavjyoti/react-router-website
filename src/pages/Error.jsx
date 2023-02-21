import { Link, useRouteError } from "react-router-dom"

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
        <h1 className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">404</h1>
        <h2 className="text-4xl my-4 font-lg">Page Not Found</h2>
        <p className="text-light mb-12">The page you're looking for does not seem to exist</p>
        <Link to='/' className="bg-primary text-white px-8 py-2 rounded-lg hover:scale-105 transition-all duration-300">Go to Home</Link>
    </div>
  )
}

export default Error
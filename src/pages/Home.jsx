import { Link } from 'react-router-dom'
    import { motion } from 'framer-motion'

    const tools = [
      { id: 'data-processor', name: 'Data Processor', description: 'Process and transform your data' },
      { id: 'file-converter', name: 'File Converter', description: 'Convert files between formats' },
      { id: 'api-integrator', name: 'API Integrator', description: 'Connect and test APIs' }
    ]

    export default function Home() {
      return (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Automation Tools
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <motion.div
                key={tool.id}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <h2 className="text-xl font-semibold mb-2">{tool.name}</h2>
                <p className="text-gray-600 mb-4">{tool.description}</p>
                <Link
                  to={`/tools/${tool.id}`}
                  className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
                >
                  Use Tool
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      )
    }

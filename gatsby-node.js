const urlUslug = require('url-slug');

exports.createPages = async ({ actions, graphql, reporter }) => {
   const result = await graphql(`
		query{
			allStrapiPages(filter:{name: { ne:"Home" }}){
				nodes{
					name
			  id
			}
		  }
			allStrapiPropierties{
				nodes{
			  		id
					name
				}
		  }
		}
   `)
 
   console.log(JSON.stringify(result));

   if(result.errors){
	reporter.panic("No results", result.errors);
   }

   const pages = result.data.allStrapiPages.nodes; 
   const propierties = result.data.allStrapiPropierties.nodes; 
 
   pages.forEach(page => { 
	actions.createPage({
		path: urlUslug(page.name),
		component: require.resolve('./src/templates/Pages.js'),
		context: {
			id: page.id,
		}
	})
})

   propierties.forEach(propierty => { 
		actions.createPage({
			path: urlUslug(propierty.name),
			component: require.resolve('./src/templates/Propierty.js'),
			context: {
				id: propierty.id,
			}
		})
	})
}
 
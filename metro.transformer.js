const upstreamTransformer = require('metro-react-native-babel-transformer');
const MdxTransformer = require('@bacons/mdx/metro-transformer');

module.exports.transform = async props => {
  const remarkMDXFrontmatter = await import('remark-mdx-frontmatter');
  const mdxTransformer = MdxTransformer.createTransformer({
    remarkPlugins: [[remarkMDXFrontmatter, {name: 'meta'}]],
  });

  // Then pass it to the upstream transformer.
  return upstreamTransformer.transform(
    // Transpile MDX first.
    await mdxTransformer.transform(props),
  );
};

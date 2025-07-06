import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: `${process.env.SERVER_URL ?? 'http://localhost:3000'}/graphql`,
  documents: ['src/**/*.{ts,tsx}', '!src/modules/graphql/generated/**/*'],
  generates: {
    './src/modules/graphql/generated/': {
      preset: 'client',
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
    './src/modules/graphql/generated/types.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      overwrite: true,
    },
  },
  ignoreNoDocuments: true,
};

export default config;

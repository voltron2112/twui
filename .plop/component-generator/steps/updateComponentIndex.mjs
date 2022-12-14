import path from "path";

export const updateComponentIndex = () => {
  return {
    type: "modify",
    path: path.join(process.cwd(), `/packages/twui/src/components/index.ts`),
    transform: (content, data) => {
      const exportString = `export * from "./${data.component_name};"`;

      //Prevent multiple adds
      const existingIndex = content.indexOf(exportString);
      if (existingIndex > 0) {
        return content;
      }

      // Update Imports
      let updatedContent = `${content}\n${exportString}`;

      return updatedContent;
    },
  };
};

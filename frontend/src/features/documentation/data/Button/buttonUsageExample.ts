const buttonUsageExample = `import Button from "@/components/ui/Button";

export default function MyComponent() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <Button 
      size="medium" 
      variant="primary"
      onClick={handleClick}
    >
      Click me
    </Button>
  );
}`;

export default buttonUsageExample;
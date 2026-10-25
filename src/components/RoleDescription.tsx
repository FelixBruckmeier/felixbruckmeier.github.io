interface RoleDescriptionProps {
  text: string;
  paragraphClassName?: string;
}

export default function RoleDescription({ text, paragraphClassName }: RoleDescriptionProps) {
  return (
    <>
      {text.split('\n\n').map((paragraph, paragraphIndex) => (
        <p className={paragraphClassName} key={paragraphIndex}>
          {paragraph}
        </p>
      ))}
    </>
  );
}

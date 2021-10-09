import React from 'react';
import styled from 'styled-components/macro';

export function generateSrcSet(src) {
    const replacements = [".avif 1x", "@2x.avif 2x", "@3x.avif 3x", ".jpg 1x", "@2x.jpg 2x", "@3x.jpg 3x"];
    return replacements.map(replacement => src.replace(".jpg", replacement)).join(",\n");
}

const PhotoGridItem = ({ id, src, alt, tags }) => {
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <Image src={src} srcSet={generateSrcSet(src)} />
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
  object-fit: cover;
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  gap: 8px;
`;

const Tag = styled.li`
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
  
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  
  &:not(:last-child) {
    min-width: max-content;
  }
`;

export default PhotoGridItem;

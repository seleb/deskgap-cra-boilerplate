import React from 'react';

export default function DraggableArea()
{
	return (
		<div data-deskgap-drag className="draggable-example">
			<p>&lt;div data-deskgap-drag&gt;</p>
			<p>Drag me to move the window.</p>
			<div data-deskgap-no-drag className="non-draggable-example">
				<p>&lt;div data-deskgap-no-drag&gt;Non-draggable area&lt;/div&gt;</p>
			</div>
			<p>&lt;/div&gt;</p>
		</div>
	);
}

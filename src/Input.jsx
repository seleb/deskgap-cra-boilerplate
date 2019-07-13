import React, { useCallback } from 'react';

export default function Input({
	value,
	setValue,
}) {
	const onChange = useCallback(({ currentTarget: { value: newValue } }) => setValue(newValue), [setValue]);
	return <input onChange={onChange} value={value} />;
}

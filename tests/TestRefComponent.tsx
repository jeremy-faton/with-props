import React, { forwardRef } from 'react'

export default forwardRef<HTMLInputElement | null>((props, ref) => (<input ref={ref} {...props} />))

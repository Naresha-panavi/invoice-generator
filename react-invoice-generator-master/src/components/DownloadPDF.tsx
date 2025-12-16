import { FC } from 'react'
import { pdf } from '@react-pdf/renderer'
import { Invoice } from '../data/types'
import { useDebounce } from '@uidotdev/usehooks'
import InvoicePage from './InvoicePage'

interface Props {
  data: Invoice
  setData(data: Invoice): void
}

const Download: FC<Props> = ({ data }) => {
  const debounced = useDebounce(data, 500)
  const title = data.invoiceTitle ? data.invoiceTitle.toLowerCase() : 'invoice'

  const handleDownload = async () => {
    try {
      const blob = await pdf(<InvoicePage pdfMode={true} data={debounced} />).toBlob()
      const url = URL.createObjectURL(blob)

      const link = document.createElement('a')
      link.href = url
      link.download = `${title}.pdf`
      link.click()

      URL.revokeObjectURL(url) // cleanup
    } catch (err) {
      console.error('Failed to generate PDF:', err)
    }
  }

  return (
    <div className='center'>
     <button 
  onClick={handleDownload}
  style={{
    backgroundColor: "#2DA8F8",
    color: "#FFFFFF",
    padding: "0.5rem 1.5rem",
    borderRadius: "0.5rem",
    fontWeight: 600,
  }}
>
  Save PDF
</button>
    </div>
  )
}

export default Download

import { FC, PropsWithChildren } from 'react'
import { Page as PdfPage, View, Text, StyleSheet } from '@react-pdf/renderer'
import compose from '../styles/compose'

interface Props {
  className?: string
  pdfMode?: boolean
}

const styles = StyleSheet.create({
  footer: {
    fontSize: 9,
    color: "#2DA8F8",
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: "#2DA8F8",
    paddingTop: 5,
    marginTop: 20,
  },
})

const Page: FC<PropsWithChildren<Props>> = ({ className, pdfMode, children }) => {
  const footerContent = (
    <>
      <Text>https://shadesdesigners.in</Text>
      <Text>info@shadesdesigners.in</Text>
      <Text>+91-9611392880 / +91-7760055303</Text>
    </>
  )

  return (
    <>
      {pdfMode ? (
        <PdfPage size="A4" style={compose("page " + (className ? className : ""))}>
          <View style={{ flex: 1 }}>{children}</View>
          <View style={styles.footer} fixed>
            {footerContent}
          </View>
        </PdfPage>
      ) : (
        <div className={'page ' + (className ? className : '')}>
          <div className="content">{children}</div>
          <div className="mt-10 text-sm text-[#2DA8F8] flex justify-between border-t border-[#2DA8F8] pt-2">
            {footerContent}
          </div>
        </div>
      )}
    </>
  )
}

export default Page

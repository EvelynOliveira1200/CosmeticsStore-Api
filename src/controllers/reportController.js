const PDFDocument = require("pdfkit");
const categoryModel = require("../models/categoryModel");
const productModel = require("../models/productModel");

const exportCategoryPDF = async (req, res) => {
    try {
      const categorys = await categoryModel.getAllCategorys();
  
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", "attachment; filename=categorys.pdf");
  
      const doc = new PDFDocument({ margin: 50 });
      doc.pipe(res);
  
      // Título
      doc.fontSize(20).text("Relatório de Categorias", { align: "center", underline: true });
      doc.moveDown(1);
  
      // Cabeçalho
      doc.fontSize(14).fillColor("black").text("Id | Nome da Categoria | Descrição", {
        underline: true,
      });
      doc.moveDown(0.5);
  
      // Conteúdo
      let isAlternate = false;
      categorys.forEach((category) => {
        if (isAlternate) {
          doc.fillColor("#f0f0f0").rect(50, doc.y, 500, 15).fill();
        }
        doc
          .fillColor("black")
          .text(`${category.id} | ${category.name} | ${category.description}`, {
            continued: false,
          });
        doc.moveDown(0.5);
        isAlternate = !isAlternate;
      });
  
      doc.end();
    } catch (error) {
      console.error("Erro ao gerar o PDF de categoria:", error);
      res.status(500).json({ message: "Erro ao gerar o PDF de categoria" });
    }
  };

  const exportProductPDF = async (req, res) => {
    try {
        const products = await productModel.getAllProducts();
        console.log(products); // Verifique os dados retornados

        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", "attachment; filename=produtos.pdf");

        const doc = new PDFDocument({ margin: 50 });
        doc.pipe(res);

        // Título
        doc
            .fontSize(20)
            .text("Relatório de Produtos", { align: "center", underline: true });
        doc.moveDown(1);

        // Cabeçalho
        doc.fontSize(12).fillColor("black").text(
            "Id | Nome | Preço | Foto | Categoria",
            { underline: true }
        );
        doc.moveDown(0.5);

        // Conteúdo com linhas alternadas
        let isAlternate = false;
        products.forEach((product) => {
            if (isAlternate) {
                doc.fillColor("#f0f0f0").rect(50, doc.y, 500, 15).fill();
            }

            const preco = `R$ ${parseFloat(product.price_product).toFixed(2).replace(".", ",")}`;

            doc
                .fillColor("black")
                .text(
                    `${product.id} | ${product.name} | ${preco} | ${product.photo || "N/A"} | ${product.category_name || "N/A"}`
                );
            doc.moveDown(0.5);
            isAlternate = !isAlternate;
        });

        doc.end();
    } catch (error) {
        console.error("Erro ao gerar o PDF de produtos:", error.message, error.stack);
        res.status(500).json({ message: "Erro ao gerar o PDF de produtos" });
    }
};
  

  module.exports = {exportCategoryPDF, exportProductPDF}
  
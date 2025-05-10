<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html>
            <head>
                <title>Рецепт</title>

                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

                <link rel="stylesheet" type="text/css" href="../css/recept.css"/>
                <link rel="stylesheet" type="text/css" href="../css/recept_adaptive.css"/>

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&amp;display=swap" rel="stylesheet" />

                <script src="../js/recept.js"></script>
                <style>
                    body {
                        background: url('<xsl:value-of select="info/back/url1"/>');
                        background-repeat: no-repeat;
                        background-size: cover; 
                        background-position: center; 
                    }
                </style>
            </head>

            <body>
            
                <div class="lider_div">

                    <nav class="nav_center">
                        <div class="nav">
                            <span class="lider_text">
                                <xsl:value-of select="info/span"/>
                            </span>
                        </div>
                    </nav>

                    <main class="main_center"> 
                        <div class="container">
                            <img class="lider_img" src="{info/recept/img/@src}"/>
                            <div class="text_center">
                                <span class="name_recept">
                                <xsl:value-of select="info/recept/namerecept"/>
                                </span>
                                <span class="ingredients">
                                    <xsl:value-of select="info/recept/span"/>
                                </span>
                                <span class="list">
                                <ul>
                                    <li class="element"><xsl:value-of select="info/recept/one"/></li>
                                    <li class="element"><xsl:value-of select="info/recept/two"/></li>
                                    <li class="element"><xsl:value-of select="info/recept/three"/></li>
                                    <li class="element"><xsl:value-of select="info/recept/four"/></li>
                                    <li class="element"><xsl:value-of select="info/recept/five"/></li>
                                </ul>
                                </span>
                            </div>
                        </div>
                        <div class="preparation">
                            <span class="prep_text">
                                <xsl:value-of select="info/recept/prepar_text"/>
                            </span>
                            <span class="text_info">
                                <xsl:value-of select="info/recept/preparation"/>
                            </span>
                            <span class="text_info2">
                                <xsl:value-of select="info/recept/preparation2"/>
                            </span>
                            <span class="end">
                                <xsl:value-of select="info/recept/supply"/>
                            </span>
                        </div>
                        <button id="button_xml" href="../html/homepage.html" class="togohomepage"><xsl:value-of select="info/text_button"/></button>
                    </main>
                    <footer class="block_footer">
                        <div class="center_footer">
                            <span class="text_footer"><xsl:value-of select="info/footer/span"/></span>
                            <div>
                                <img id="facebook" class="icon" src="{info/footer/img1/@src}"/>
                                <img id="insta" class="icon" src="{info/footer/img2/@src}"/>
                                <img id="youtube" class="icon" src="{info/footer/img3/@src}"/>
                            </div>
                        </div>
                    </footer>

                    
                </div>


            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>
const purchaseHtml = (torrent) => { //un mail por torrent, torrent debe ser string.
  return `<!DOCTYPE html>
  <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en"><head>
  <title></title>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
  <style>
      * {
          box-sizing: border-box;
      }

      body {
          margin: 0;
          padding: 0;
      }

      a[x-apple-data-detectors] {
          color: inherit !important;
          text-decoration: inherit !important;
      }

      #MessageViewBody a {
          color: inherit;
          text-decoration: none;
      }

      p {
          line-height: inherit
      }

      .desktop_hide,
      .desktop_hide table {
          mso-hide: all;
          display: none;
          max-height: 0px;
          overflow: hidden;
      }

      .image_block img+div {
          display: none;
      }

      @media (max-width:520px) {
          .desktop_hide table.icons-inner {
              display: inline-block !important;
          }

          .icons-inner {
              text-align: center;
          }

          .icons-inner td {
              margin: 0 auto;
          }

          .mobile_hide {
              display: none;
          }

          .row-content {
              width: 100% !important;
          }

          .stack .column {
              width: 100%;
              display: block;
          }

          .mobile_hide {
              min-height: 0;
              max-height: 0;
              max-width: 0;
              overflow: hidden;
              font-size: 0px;
          }

          .desktop_hide,
          .desktop_hide table {
              display: table !important;
              max-height: none !important;
          }
      }
  </style>
</head>

<body style="margin: 0; background-color: #fff; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
  <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff;">
      <tbody>
          <tr>
              <td>
                  <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                      <tbody>
                          <tr>
                              <td>
                                  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; width: 500px; margin: 0 auto;" width="500">
                                      <tbody>
                                          <tr>
                                              <td class="column column-1" width="100%" style="font-weight: 400; text-align: left; mso-table-lspace: 0pt; mso-table-rspace: 0pt; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                  <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                      <tbody><tr>
                                                          <td class="pad" style="width:100%;">
                                                              <div class="alignment" align="center" style="line-height:10px"><img src="https://d3c7ab54c6.imgdist.com/public/users/Integrators/BeeProAgency/1068250_1053493/editor_images/c540fb67-9215-42da-9b0a-6e3b99462e06.png" style="display: block; height: auto; border: 0; max-width: 375px; width: 100%;" width="375"></div>
                                                          </td>
                                                      </tr>
                                                  </tbody></table>
                                                  <table class="heading_block block-2" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                      <tbody><tr>
                                                          <td class="pad">
                                                              <h1 style="margin: 0; color: #1e0e4b; direction: ltr; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 38px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: left; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">Thank you for your purchase!!🥳😁 Here is your link:</span></h1>
                                                          </td>
                                                      </tr>
                                                  </tbody></table><!--[if mso]><style>#list-r0c0m2 ul{margin: 0 !important; padding: 0 !important;} #list-r0c0m2 ul li{mso-special-format: bullet;}#list-r0c0m2 .levelOne li {margin-top: 0 !important;} #list-r0c0m2 .levelOne {margin-left: -20px !important;}</style><![endif]-->
                                                  <table class="list_block block-3" id="list-r0c0m2" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                      <tbody><tr>
                                                          <td class="pad">
                                                              <div class="levelOne" style="margin-left: 0;">
                                                                  <ul class="leftList" start="1" style="margin-top: 0; margin-bottom: 0; padding: 0; padding-left: 20px; font-weight: 400; text-align: left; color: #101112; direction: ltr; font-family: Arial,'Helvetica Neue',Helvetica,sans-serif; font-size: 16px; letter-spacing: 0; line-height: 120%; mso-line-height-alt: 19.2px; list-style-type: disc;">
                                                                      <li style="margin-bottom: 0; text-align: left;">${torrent}</li>
                                                                  </ul>
                                                              </div>
                                                          </td>
                                                      </tr>
                                                  </tbody></table>
                                              </td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </td>
                          </tr>
                      </tbody>
                  </table>
                  <table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;">
                      <tbody>
                          <tr>
                              <td>
                                  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000; width: 500px; margin: 0 auto;" width="500">
                                      <tbody>
                                          <tr>
                                              <td class="column column-1" width="100%" style="font-weight: 400; text-align: left; mso-table-lspace: 0pt; mso-table-rspace: 0pt; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                  <table class="icons_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                      <tbody><tr>
                                                          <td class="pad" style="vertical-align: middle; color: #1e0e4b; font-family: 'Inter', sans-serif; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
                                                              <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                  <tbody><tr>
                                                                      <td class="alignment" style="vertical-align: middle; text-align: center;"><!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
                                                                          <!--[if !vml]><!-->
                                                                          <table class="icons-inner" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;" cellpadding="0" cellspacing="0" role="presentation"><!--<![endif]-->
                                                                              <tbody><tr>
                                                                                  <td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 6px;"><a href="http://designedwithbeefree.com/" target="_blank" style="text-decoration: none;"><img class="icon" alt="Beefree Logo" src="https://d1oco4z2z1fhwp.cloudfront.net/assets/Beefree-logo.png" height="32" width="34" align="center" style="display: block; height: auto; margin: 0 auto; border: 0;"></a></td>
                                                                                  <td style="font-family: 'Inter', sans-serif; font-size: 15px; color: #1e0e4b; vertical-align: middle; letter-spacing: undefined; text-align: center;"><a href="http://designedwithbeefree.com/" target="_blank" style="color: #1e0e4b; text-decoration: none;">Designed with Beefree</a></td>
                                                                              </tr>
                                                                          </tbody></table>
                                                                      </td>
                                                                  </tr>
                                                              </tbody></table>
                                                          </td>
                                                      </tr>
                                                  </tbody></table>
                                              </td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </td>
          </tr>
      </tbody>
  </table><!-- End -->


</body></html>`;
};
module.exports = { purchaseHtml };

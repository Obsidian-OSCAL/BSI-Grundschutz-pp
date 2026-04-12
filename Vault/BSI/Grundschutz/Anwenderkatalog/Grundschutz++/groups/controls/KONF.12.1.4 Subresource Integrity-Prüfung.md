---
tags:
- produktbeschreibung
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.12.1.4 Subresource Integrity-Prüfung
parent_control: KONF.12.1 Eingabevalidierung
stmt_target_object_category: Webbrowser
stmt_modal_verb: SOLLTE
stmt_action_word: einschränken
stmt_documentation: Konfigurationshistorie
control_effort_level: '1'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.12.1.4 - Subresource Integrity-Prüfung
Tag: [[tags_Produktbeschreibung|Produktbeschreibung]]
Gruppe: [KONF.12 Kontrollierte Datenverarbeitung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.12%20Kontrollierte%20Datenverarbeitung.md)
---

** Übergeordnetes Control: ** [KONF.12.1 Eingabevalidierung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/KONF.12.1%20Eingabevalidierung.md)
### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Konfiguration (KONF)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF%20Konfiguration.md)*<br> *  &rarr; [Kontrollierte Datenverarbeitung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.12%20Kontrollierte%20Datenverarbeitung.md) *</div> | [Konfiguration](practices_Konfiguration_8e46d34c-5145-44f8-882e-790e2dcffa09) | [Webbrowser](target_object_categories_Webbrowser_8b64663c-8388-40bc-a68b-473e753ae4d0) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | aufgerufene Inhalte anhand der von der Webseite bereitgestellten Subresource Integrity-Prüfung |  | [einschränken](action_words_einschränken_c8289ac3-7877-4224-b43b-08e005e461ad) | [Konfigurationshistorie](documentation_guidelines_Konfigurationshistorie) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Konfiguration für Webbrowser SOLLTE aufgerufene Inhalte anhand der von der Webseite bereitgestellten Subresource Integrity-Prüfung einschränken.</span>

> [!info]- Guidance
>Unter Subresource Integrity (SRI), zu Deutsch etwa „Integrität von Unterressourcen“, versteht man einen Sicherheitsmechanismus von Webbrowsern, der sicherstellt, dass die vom Browser geladenen Ressourcen, wie z.B. JavaScript-Dateien oder CSS-Stylesheets, die von einem Drittanbieter (etwa einem Content Delivery Network, CDN) stammen, nicht unerwünscht manipuliert wurden. Technisch geschieht dies dadurch, dass die Webseite beim Einbinden der Ressource einen kryptografischen Hashwert (oder Digest) der erwarteten Datei als Attribut (z.B. integrity="...") mitsendet. Der Webbrowser kann dann nach dem Herunterladen der Ressource diesen Hashwert neu berechnen und mit dem bereitgestellten Wert vergleichen. Dies ist notwendig, da die Institution zwar die eigene Webseite kontrolliert, aber nicht die Server Dritter, von denen oft Bibliotheken geladen werden. Der Sinn und Zweck dieser Vorschrift liegt darin, die Sicherheit der Endnutzer zu erhöhen und Risiken durch manipulierte externe Inhalte zu minimieren. Ohne diese Prüfung könnte eine kompromittierte Drittanbieter-Ressource bösen Code in die Webseite der Institution einschleusen, was zu Vorfällen wie Datendiebstahl oder der Installation von Malware auf den Geräten der Nutzer führen könnte.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 0e525ce3-95e3-4095-83f7-942eb6b09c50 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [1](effort_level_1) |> | ** Alternate Identifier ** | 0e525ce3-95e3-4095-83f7-942eb6b09c50 |

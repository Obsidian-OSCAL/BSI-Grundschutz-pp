---
tags:
- produktbeschreibung
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.12.1.3 Same-Origin-Policy
parent_control: KONF.12.1 Eingabevalidierung
stmt_target_object_category: Webbrowser
stmt_modal_verb: SOLLTE
stmt_action_word: einschränken
stmt_documentation: Konfigurationshistorie
control_effort_level: '1'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.12.1.3 - Same-Origin-Policy
Tag: [[tags_Produktbeschreibung|Produktbeschreibung]]
Gruppe: [KONF.12 Kontrollierte Datenverarbeitung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.12%20Kontrollierte%20Datenverarbeitung.md)
---

** Übergeordnetes Control: ** [KONF.12.1 Eingabevalidierung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/KONF.12.1%20Eingabevalidierung.md)
### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Konfiguration (KONF)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF%20Konfiguration.md)*<br> *  &rarr; [Kontrollierte Datenverarbeitung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.12%20Kontrollierte%20Datenverarbeitung.md) *</div> | [Konfiguration](practices_Konfiguration_8e46d34c-5145-44f8-882e-790e2dcffa09) | [Webbrowser](target_object_categories_Webbrowser_8b64663c-8388-40bc-a68b-473e753ae4d0) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | aufgerufene Inhalte anhand der von der Webseite bereitgestellten Same-Origin-Policy |  | [einschränken](action_words_einschränken_c8289ac3-7877-4224-b43b-08e005e461ad) | [Konfigurationshistorie](documentation_guidelines_Konfigurationshistorie) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Konfiguration für Webbrowser SOLLTE aufgerufene Inhalte anhand der von der Webseite bereitgestellten Same-Origin-Policy einschränken.</span>

> [!info]- Guidance
>Die Same-Origin-Policy, oft auch als SOP bekannt, ist ein fundamentaler Sicherheitsmechanismus im Webbrowser, der sicherstellt, dass von einer Quelle (Origin) geladene Skripte oder Dokumente nicht mit Ressourcen einer anderen Quelle interagieren können, wobei eine Quelle durch die Kombination aus Protokoll, Hostname und Port definiert wird. Sinn und Zweck dieser strikten Trennung ist der Schutz vor Datenabfluss und unbefugten Interaktionen zwischen unterschiedlichen Webanwendungen innerhalb derselben Browsersitzung. Ohne diese Isolierung könnte eine schadhafte Webseite beispielsweise vertrauliche Informationen aus einer parallel geöffneten legitimen Anwendung, wie einem Online-Banking-Portal oder internen Firmentool, auslesen und an einen Angreifer senden. Die konsequente Durchsetzung der Same-Origin-Policy durch den Browser kann solche Cross-Site-Scripting-Angriffe (XSS) effektiv unterbinden und somit die Vertraulichkeit und Integrität der vom Nutzer verarbeiteten Daten gewährleisten.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | faaaee02-ac74-49a0-af01-4e5659ea1053 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [1](effort_level_1) |> | ** Alternate Identifier ** | faaaee02-ac74-49a0-af01-4e5659ea1053 |

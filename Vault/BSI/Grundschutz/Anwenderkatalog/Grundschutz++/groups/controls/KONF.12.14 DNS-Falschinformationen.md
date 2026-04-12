---
tags:
- produktbeschreibung
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.12.14 DNS-Falschinformationen
stmt_target_object_category: DNS-Server
stmt_modal_verb: SOLLTE
stmt_action_word: deaktivieren
stmt_documentation: Konfigurationshistorie
control_effort_level: '3'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.12.14 - DNS-Falschinformationen
Tag: [[tags_Produktbeschreibung|Produktbeschreibung]]
Gruppe: [KONF.12 Kontrollierte Datenverarbeitung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.12%20Kontrollierte%20Datenverarbeitung.md)
---

### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Konfiguration (KONF)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF%20Konfiguration.md)*<br> *  &rarr; [Kontrollierte Datenverarbeitung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.12%20Kontrollierte%20Datenverarbeitung.md) *</div> | [Konfiguration](practices_Konfiguration_8e46d34c-5145-44f8-882e-790e2dcffa09) | [DNS-Server](target_object_categories_DNS-Server_f88fd07b-f918-45b5-80a5-59fcea43a99c) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | DNS-Antworten, die falsche Domain-Informationen liefern, |  | [deaktivieren](action_words_deaktivieren_5f0f5c35-65a5-4db2-9b27-0d86c2d7089b) | [Konfigurationshistorie](documentation_guidelines_Konfigurationshistorie) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Konfiguration für DNS-Server SOLLTE DNS-Antworten, die falsche Domain-Informationen liefern, deaktivieren.</span>

> [!info]- Guidance
>Falsch sind Domain-Informationen, wenn sie nicht der tatsächlichen Erreichbarkeit des Zieles entsprechen, sondern z.B. auf Werbeseiten umleiten. DNS-Server, die falsche Antworten liefern, können zu unerwarteten Fehlern in Anwendungen oder zum DNS-Hijacking führen. Sie sind an unerwarteten Websites, Zertifikatsfehlern oder mit DNS-Prüfsoftware zu erkennen. Gilt sowohl für die Konfiguration des eigenen Servers, als auch für die verwendeten DNS Upstream Server.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | d3856d40-5869-4b06-812b-4cc966f96d80 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | d3856d40-5869-4b06-812b-4cc966f96d80 |

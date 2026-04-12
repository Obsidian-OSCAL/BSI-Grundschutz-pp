---
tags: oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: DET.3.1.7 Was, Wann, Wo
parent_control: DET.3.1 Protokollierung sicherheitsrelevanter Ereignisse
stmt_target_object_category: Anwendungen
stmt_modal_verb: SOLLTE
stmt_action_word: protokollieren
stmt_documentation: Audit Log
control_effort_level: '5'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DET.3.1.7 - Was, Wann, Wo
Gruppe: [DET.3 Protokollierung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET.3%20Protokollierung.md)
---

** Übergeordnetes Control: ** [DET.3.1 Protokollierung sicherheitsrelevanter Ereignisse](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/DET.3.1%20Protokollierung%20sicherheitsrelevanter%20Ereignisse.md)
### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Detektion (DET)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET%20Detektion.md)*<br> *  &rarr; [Protokollierung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET.3%20Protokollierung.md) *</div> | [Detektion](practices_Detektion_f479aa5a-6dd9-4b9b-973e-8c4f85b074ed) | [Anwendungen](target_object_categories_Anwendungen_7e41ecf5-1831-4691-ad0c-4fc7bbc1b871) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | zu jedem sicherheitsrelevanten Ereignis | mindestens Zeitpunkt, die Quelle und das Zielobjekt | [protokollieren](action_words_protokollieren_fe0c8466-8c0d-450b-a649-02c11e0231f8) | [Audit Log](documentation_guidelines_Audit_Log) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Detektion für Anwendungen SOLLTE zu jedem sicherheitsrelevanten Ereignis mindestens Zeitpunkt, die Quelle und das Zielobjekt protokollieren.</span>

> [!info]- Guidance
>Für die Definition eines Sicherheitsrelevanten Ereignisses, siehe Glossar (Namensräume des Grundschutz++). Damit einem Ereignis zuverlässig ein bestimmter Zeitpunkt zugewiesen werden kann, ist eine einheitliche Zeitquelle für die Systemuhr (meist über NTP oder PTP) als Voraussetzung erforderlich.  Bei der Protokollierung der Herkunft oder Quelle (z.B. Gerätenamen, IP-Adresse) besteht ein enger Zusammenhang zu Compliance-Anforderungen, etwa zum Datenschutz.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | c4cb825e-c401-44a5-8ecf-de12b33e6a16 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | c4cb825e-c401-44a5-8ecf-de12b33e6a16 |

> [!info]- Links> > required: [KONF.4.5 Zeitquellen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/KONF.4.5%20Zeitquellen.md)

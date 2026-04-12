---
tags:
- det412-prm1
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: DET.4.12 Monitoring der Netzverfügbarkeit
stmt_target_object_category: Netze
stmt_modal_verb: SOLLTE
stmt_action_word: überwachen
result_reference: Verfügbarkeit
control_effort_level: '5'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DET.4.12 - Monitoring der Netzverfügbarkeit
Gruppe: [DET.4 Überwachung von Aktivitäten](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET.4%20Überwachung%20von%20Aktivitäten.md)
---

> [!example]- Untergeordnete Controls
> [DET.4.12.1 Auslastung des Netzes](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/DET.4.12.1%20Auslastung%20des%20Netzes.md)### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Detektion (DET)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET%20Detektion.md)*<br> *  &rarr; [Überwachung von Aktivitäten](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET.4%20Überwachung%20von%20Aktivitäten.md) *</div> | [Detektion](practices_Detektion_f479aa5a-6dd9-4b9b-973e-8c4f85b074ed) | [Netze](target_object_categories_Netze_1a4fb57d-1648-4111-979d-6a5f4f848620) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | die Verfügbarkeit des Netzes | anhand von {{Schwellwerten}} | [überwachen](action_words_überwachen_43c9fe35-e725-48b1-85d2-29cdcc69ce63) | Detektions-Konzept | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Detektion für Netze SOLLTE die Verfügbarkeit des Netzes anhand von {{ insert: param, det.4.12-prm1 }} überwachen.</span>
> > [!example]- im Ergebnis referenzierte Begriffe
> > | Begriff | Definition |> > | - | - |> > | [Verfügbarkeit](result_Verfügbarkeit_00000000-0000-0000-0000-000000000000) | Eigenschaft der Information zugänglich und nutzbar zu sein, wenn eine befugte Entität Bedarf hat. |

> [!info]- Guidance
>Die Verfügbarkeit von Netzen, insbesondere des Internetanschlusses, sowie im Kern- und Verteilernetz, ist von zentraler Bedeutung für die Verfügbarkeit von IT-Infrastrukturen. Ein Monitoring ermöglicht es dem Betriebspersonal, bei Netzproblemen reagieren zu können, bevor Beschwerden von Nutzenden aufkommen. Kann durch Hello-Packete von Netzkomponenten oder die Erreichbarkeit von Diensten über das Netz umgesetzt werden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 3757d23d-e17e-4bae-857e-c045505d579a |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | 3757d23d-e17e-4bae-857e-c045505d579a |

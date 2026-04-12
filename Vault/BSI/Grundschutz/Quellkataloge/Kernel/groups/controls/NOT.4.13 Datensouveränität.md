---
tags:
- not413-prm1
- not413-prm2
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: NOT.4.13 Datensouveränität
stmt_target_object_category: Outsourcing
stmt_modal_verb: SOLLTE
stmt_action_word: ausführen
stmt_documentation: Datensicherungskonzept
control_effort_level: '3'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# NOT.4.13 - Datensouveränität
Gruppe: [NOT.4 Datensicherung](BSI/Grundschutz/Quellkataloge/Kernel/groups/NOT.4%20Datensicherung.md)
---

### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Notfallplanung (NOT)](BSI/Grundschutz/Quellkataloge/Kernel/groups/NOT%20Notfallplanung.md)*<br> *  &rarr; [Datensicherung](BSI/Grundschutz/Quellkataloge/Kernel/groups/NOT.4%20Datensicherung.md) *</div> | [Notfallplanung](practices_Notfallplanung_723219b0-d58a-432d-bce2-2bf16c5874ae) | [Outsourcing](target_object_categories_Outsourcing_ff3b07f0-1d19-44fb-ac2c-dea97010c5b8) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | die Datensicherung von Daten, die bei einem Dienstleister verarbeitet werden, | nach {{einem anerkannten Standard}} {{regelmäßig}} | [ausführen](action_words_ausführen_54a1c8e6-043f-411c-8e83-a5a47bb840fe) | [Datensicherungskonzept](documentation_guidelines_Datensicherungskonzept) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Notfallplanung für Outsourcing SOLLTE die Datensicherung von Daten, die bei einem Dienstleister verarbeitet werden, nach {{ insert: param, not.4.13-prm1 }} {{ insert: param, not.4.13-prm2 }} ausführen.</span>

> [!info]- Guidance
>Dies dient dazu bei einem Ausfall des Dienstleisters die Daten schnell bei einem anderen Dienstleister oder intern weiterverwenden zu können (Interoperabilität in der Exitstrategie). Anerkannt ist hier ein Format, welches auch bei einem anderen Dienstleister verwendet werden kann. Mögliche anerkannte Standards zum Datenaustausch sind z.B. XML, JSON, YAML, CSV, ODF. Eine Sicherungskopie ist unter eigener Hoheit, wenn sie auf Datenträgern im Besitz der Institution aufbewahrt wird, über die dieser Dienstleister keine Kontrolle hat. Relevant sind dabei auch Konfigurationsdateien, Programmcode und Dokumentationen, die zur Verwendung der Daten erforderlich sind.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 13789041-edcf-4270-a8d1-49bdd0d54ab4 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | 13789041-edcf-4270-a8d1-49bdd0d54ab4 |

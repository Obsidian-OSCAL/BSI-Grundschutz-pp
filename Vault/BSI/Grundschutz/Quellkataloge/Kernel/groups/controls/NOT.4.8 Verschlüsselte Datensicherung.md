---
tags:
- cryptography
- not48-prm1
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: NOT.4.8 Verschlüsselte Datensicherung
stmt_modal_verb: SOLLTE
stmt_action_word: verschlüsseln
stmt_documentation: Datensicherungskonzept
control_effort_level: '3'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# NOT.4.8 - Verschlüsselte Datensicherung
Tag: [[tags_Cryptography|Cryptography]]
Gruppe: [NOT.4 Datensicherung](BSI/Grundschutz/Quellkataloge/Kernel/groups/NOT.4%20Datensicherung.md)
---

### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Notfallplanung (NOT)](BSI/Grundschutz/Quellkataloge/Kernel/groups/NOT%20Notfallplanung.md)*<br> *  &rarr; [Datensicherung](BSI/Grundschutz/Quellkataloge/Kernel/groups/NOT.4%20Datensicherung.md) *</div> | [Notfallplanung](practices_Notfallplanung_723219b0-d58a-432d-bce2-2bf16c5874ae) |  | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | die Datensicherung | durch {{einen anerkannten kryptographischen Algorithmus}} | [verschlüsseln](action_words_verschlüsseln_4dc9ef92-2124-449a-9a99-61095d271599) | [Datensicherungskonzept](documentation_guidelines_Datensicherungskonzept) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Notfallplanung SOLLTE die Datensicherung durch {{ insert: param, not.4.8-prm1 }} verschlüsseln.</span>

> [!info]- Guidance
>Die Datensicherung enthält typischerweise eine große Menge schützenswerter Daten. Durch Verschlüsselung wird die Vertraulichkeit und Integrität geschützter Informationen auch nach einem schwerwiegenden Vorfall gewährleistet. Dies kann besonders bei einem Datenleck (engl. Data Breach) oder Diebstahl von Speichermedien helfen, da die Offenlegung sensibler Daten selbst bei unbefugtem Zugriff verhindert werden kann. Für anerkannte Algorithmen siehe BSI TR-02102. Technisch kann die Festplattenverschlüsselung auf dem Sicherungsspeicher (Disk Encryption) genutzt werden, aber auch die dateibasierte Verschlüsselung jedes einzelnen Sicherungs-Archives. Wichtig ist es, dabei auch auf die Verwaltung der kryptographischen Schlüssel (Key Management) zu achten, damit diese weder einem unbeugten Zugriff ausgesetzt sind, noch der Zugriff auf die Datensicherung im Ernstfall durch fehlende Zugangsdaten unmöglich wird.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | b443fd60-5e58-454b-8d57-baec8a876d22 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | b443fd60-5e58-454b-8d57-baec8a876d22 |

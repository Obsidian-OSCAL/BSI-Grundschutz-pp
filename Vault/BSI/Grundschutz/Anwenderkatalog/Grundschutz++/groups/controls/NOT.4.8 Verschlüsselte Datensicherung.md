---
tags:
- Cryptography
- not48-prm1
class: BSI-Stand-der-Technik-Kernel
type: control
control: NOT.4.8 Verschlüsselte Datensicherung
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# NOT.4.8 - Verschlüsselte Datensicherung
Tags: "[Cryptography](tags_Cryptography)"
Gruppe: [NOT.4 Datensicherung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/NOT.4%20Datensicherung.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Notfallplanung (NOT)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/NOT%20Notfallplanung.md)**<br> ***  &rarr; [Datensicherung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/NOT.4%20Datensicherung.md) *** |  | SOLLTE | die Datensicherung | durch {{einen anerkannten kryptographischen Algorithmus}} | verschlüsseln | Datensicherungskonzept | >Notfallplanung SOLLTE die Datensicherung durch {{ insert: param, not.4.8-prm1 }} verschlüsseln.

> [!info]- Guidance
>Die Datensicherung enthält typischerweise eine große Menge schützenswerter Daten. Durch Verschlüsselung wird die Vertraulichkeit und Integrität geschützter Informationen auch nach einem schwerwiegenden Vorfall gewährleistet. Dies kann besonders bei einem Datenleck (engl. Data Breach) oder Diebstahl von Speichermedien helfen, da die Offenlegung sensibler Daten selbst bei unbefugtem Zugriff verhindert werden kann. Für anerkannte Algorithmen siehe BSI TR-02102. Technisch kann die Festplattenverschlüsselung auf dem Sicherungsspeicher (Disk Encryption) genutzt werden, aber auch die dateibasierte Verschlüsselung jedes einzelnen Sicherungs-Archives. Wichtig ist es, dabei auch auf die Verwaltung der kryptographischen Schlüssel (Key Management) zu achten, damit diese weder einem unbeugten Zugriff ausgesetzt sind, noch der Zugriff auf die Datensicherung im Ernstfall durch fehlende Zugangsdaten unmöglich wird.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | b443fd60-5e58-454b-8d57-baec8a876d22 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | b443fd60-5e58-454b-8d57-baec8a876d22 |

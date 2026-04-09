---
tags: Cryptography
class: BSI-Stand-der-Technik-Kernel
type: control
control: BER.7.11 Integrität
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# BER.7.11 - Integrität
Tags: "[Cryptography](tags_Cryptography)"
Gruppe: [BER.7 Schlüsselmanagement](BSI/Grundschutz/Quellkataloge/Kernel/groups/BER.7%20Schlüsselmanagement.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Berechtigung (BER)](BSI/Grundschutz/Quellkataloge/Kernel/groups/BER%20Berechtigung.md)**<br> ***  &rarr; [Schlüsselmanagement](BSI/Grundschutz/Quellkataloge/Kernel/groups/BER.7%20Schlüsselmanagement.md) *** |  | SOLLTE | die Verifikation der Integrität geheimer Schlüssel | vor jeder Nutzung | verankern | IT-Betriebskonzept | >Berechtigung SOLLTE die Verifikation der Integrität geheimer Schlüssel vor jeder Nutzung verankern.

> [!info]- Guidance
>Wird die Integrität von Schlüsseln vor der Verwendung nicht geprüft, so könnte er unbemerkt durch einen Angreifer ausgetauscht werden, wodurch der Angreifer den vermeintlich verschlüsselten Austausch mitlesen. Daher ist ein Integritätsschutz (z.B. eine bekannte Checksumme oder Fingerabdruck) von abgelegten Schlüsseln sinnvoll. Dies kann z.B. durch den Abgleich von Prüfsummen geschehen, welche auf einem anderen IT-System gespeichert sind. Für die Implementierung genügt es, wenn die eingesetzten IT-Produkte bereits so entwickelt oder beschafft worden sind, dass sie die Prüfung automatisiert durchführen.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 3ec4d43b-001d-4911-9adf-707657321030 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [1](effort_level_1) |> | ** Alternate Identifier ** | 3ec4d43b-001d-4911-9adf-707657321030 |

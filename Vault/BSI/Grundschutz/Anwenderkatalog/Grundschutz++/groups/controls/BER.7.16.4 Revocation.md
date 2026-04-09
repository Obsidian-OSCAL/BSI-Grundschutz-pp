---
tags: Cryptography
class: BSI-Stand-der-Technik-Kernel
type: control
control: BER.7.16.4 Revocation
parent_control: BER.7.16 Vorgaben für die Schlüsselbeglaubigung
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# BER.7.16.4 - Revocation
Tags: "[Cryptography](tags_Cryptography)"
Gruppe: [BER.7 Schlüsselmanagement](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER.7%20Schlüsselmanagement.md)
---

** Übergeordnetes Control: ** [BER.7.16 Vorgaben für die Schlüsselbeglaubigung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/BER.7.16%20Vorgaben%20für%20die%20Schlüsselbeglaubigung.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Berechtigung (BER)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER%20Berechtigung.md)**<br> ***  &rarr; [Schlüsselmanagement](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER.7%20Schlüsselmanagement.md) *** |  | SOLLTE | den Schlüssel anhand der Vorgaben für die Schlüsselbeglaubigung | bei Revocation einer Beglaubigung | testen | IT-Betriebskonzept | >Berechtigung SOLLTE den Schlüssel anhand der Vorgaben für die Schlüsselbeglaubigung bei Revocation einer Beglaubigung testen.

> [!info]- Guidance
>Die Revocation einer Beglaubigung (engl. revocation of attestation) ist die nachträgliche Ungültigerklärung einer solchen Bestätigung, beispielsweise durch Sperrung eines Zertifikats mittels Certificate Revocation List (CRL) oder Online Certificate Status Protocol (OCSP). Das Testen des Schlüssels anhand der Vorgaben für die Schlüsselbeglaubigung bedeutet hier, dass geprüft wird, ob die festgelegten Vorgaben für die Revocation erfüllt sind. Damit wird sichergestellt, dass der Widerruf einer Beglaubigung nur bei Vorliegen der Voraussetzungen angestoßen wird und dann technisch und organisatorisch korrekt umgesetzt und im Systemverhalten nachvollziehbar berücksichtigt wird, etwa durch sofortige Ungültigkeitserklärung oder Sperrung des betreffenden Schlüssels.  Der Zweck dieser Vorgabe liegt darin, unzulässige oder verfrühte Revocations ebenso zu vermeiden wie verspätete oder unvollständige Umsetzungen, die zu Sicherheitslücken führen könnten. Wird die Prüfung der Revocation-Vorgaben fehlerhaft oder unvollständig durchgeführt, könnte ein gültiger Schlüssel fälschlich gesperrt werden oder ein tatsächlich kompromittierter Schlüssel weiter im Einsatz bleiben. Eine konsequente Umsetzung kann dagegen gewährleisten, dass der Widerruf von Beglaubigungen nur im vorgesehenen Rahmen erfolgt, die Integrität des Vertrauensmodells erhalten bleibt und alle abhängigen Systeme den neuen Status korrekt übernehmen. Praktisch kann dies durch automatisierte Regelprüfungen in Zertifikatsverwaltungsdiensten, durch Ereignisprotokollierung in Key Management Services (KMS) oder durch Hardware-Sicherheitsmodule (HSM) umgesetzt werden, die Revocation-Bedingungen strikt validieren, bevor Änderungen am Schlüsselstatus ausgeführt werden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 0e70f6df-b9c4-4046-871a-5e4d1263fb9f |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | 0e70f6df-b9c4-4046-871a-5e4d1263fb9f |

> [!info]- Links> > required: [BER.7.16 Vorgaben für die Schlüsselbeglaubigung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/BER.7.16%20Vorgaben%20für%20die%20Schlüsselbeglaubigung.md)

---
tags: Cryptography
class: BSI-Stand-der-Technik-Kernel
type: control
control: BER.7.16.3 Erneuerung
parent_control: BER.7.16 Vorgaben für die Schlüsselbeglaubigung
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# BER.7.16.3 - Erneuerung
Tags: "[Cryptography](tags_Cryptography)"
Gruppe: [BER.7 Schlüsselmanagement](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER.7%20Schlüsselmanagement.md)
---

** Übergeordnetes Control: ** [BER.7.16 Vorgaben für die Schlüsselbeglaubigung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/BER.7.16%20Vorgaben%20für%20die%20Schlüsselbeglaubigung.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Berechtigung (BER)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER%20Berechtigung.md)**<br> ***  &rarr; [Schlüsselmanagement](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER.7%20Schlüsselmanagement.md) *** |  | SOLLTE | den Schlüssel anhand der Vorgaben für die Schlüsselbeglaubigung | bei Erneuerung einer Beglaubigung | testen | IT-Betriebskonzept | >Berechtigung SOLLTE den Schlüssel anhand der Vorgaben für die Schlüsselbeglaubigung bei Erneuerung einer Beglaubigung testen.

> [!info]- Guidance
>Die Erneuerung einer Beglaubigung beschreibt den Vorgang, bei dem ein ablaufendes oder gefährdetes Zertifikat durch ein neues ersetzt wird, wobei die Vertrauenskette erhalten bleibt. Dazu wird geprüft, ob die Vorgaben für die Erneuerung der Beglaubigung erfüllt sind. Das Testen des Schlüssels im Rahmen der Erneuerung dient dazu, die fortgesetzte Vertrauenswürdigkeit und Funktionsfähigkeit des Schlüssels sicherzustellen, etwa durch Verifikation der Signatur, Abgleich der Fingerprints oder Validierung gegen Sperrlisten.  Der Zweck dieser Anforderung liegt in der Sicherstellung, dass bei der Erneuerung eines Zertifikats keine kompromittierten, fehlerhaften oder unautorisierten Schlüssel weiterverwendet werden. Wird die Schlüsselprüfung unterlassen, könnte ein Angreifer manipulierte oder gefälschte Schlüssel einschleusen, was zu unbemerktem Datenabgriff, Identitätsmissbrauch oder Integritätsverlust führen könnte. Eine wirksame Prüfung kann dagegen sicherstellen, dass nur überprüfte und gültige Schlüssel erneut beglaubigt werden, wodurch das Vertrauensniveau der gesamten kryptographischen Infrastruktur stabil bleibt. Sinnvolle Umsetzungsvarianten können z. B. die Nutzung automatisierter Schlüsselvalidierungen in Public-Key-Infrastrukturen (PKI), der Einsatz von Hardware-Sicherheitsmodulen (HSM) für die Signaturprüfung oder der Abgleich über Transparenzregister wie Certificate Transparency Logs sein.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 40d229bb-6fab-4a1a-a96a-a2a119acef5f |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | 40d229bb-6fab-4a1a-a96a-a2a119acef5f |

> [!info]- Links> > required: [BER.7.16 Vorgaben für die Schlüsselbeglaubigung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/BER.7.16%20Vorgaben%20für%20die%20Schlüsselbeglaubigung.md)
